import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [step, setStep] = useState(0);
  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth - 100, // Prevents overflow
        height: window.innerHeight - 100,
      });
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const moveNoButton = () => {
    const padding = 50;
    const newX =
      Math.random() * (screenSize.width - padding * 2) -
      (screenSize.width / 2 - padding);
    const newY =
      Math.random() * (screenSize.height - padding * 2) -
      (screenSize.height / 2 - padding);

    setNoPos({ x: newX, y: newY });
  };

  return (
    <div className="min-h-screen  bg-pink-300 w-screen bg-black flex flex-col items-center justify-center text-white">
      <h1 className="text-2xl font-bold  text-center">
        Do you wanna live your whole life with me? ❤️
      </h1>
      <div className="max-w-xl">
        <h2 className="text-2xl font-bold text-center mt-4">
          ✨ Benefits of living with me ✨
        </h2>
        <div className="flex flex-wrap gap-6 mt-6 justify-center">
          {[
            { icon: "🍽️", value: "Unlimited Home-cooked Food" },
            { icon: "😂", value: "Daily Dose of Laughter" },
            { icon: "🥰", value: "24/7 Love & Hugs" },
            { icon: "🎮", value: "Gaming & Movie Nights" },
            { icon: "😎", value: "Surprises" },
            { icon: "😘", value: "90% No anger guarantee " },
            { icon: "🛏️", value: "Cuddle Partner Every Night" },
          ]?.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 transition  group hover:bg-sky-400 bg-white  rounded-xl shadow-lg flex items-center gap-3"
            >
              <span className="">{item?.icon}</span>
              <p className="text-sm font-medium text-sky-400 group-hover:text-white">
                {item?.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <img
          className="w-52 h-52"
          src={
            step
              ? "https://media0.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif"
              : "https://media1.giphy.com/media/cLS1cfxvGOPVpf9g3y/giphy.gif"
          }
          alt="Cute animated illustration"
        />

        {/*  */}
      </div>

      {!step ? (
        <div className="relative mt-6 flex gap-4">
          <button
            onClick={() => setStep(1)}
            className="px-5 py-2 bg-white text-pink-600 hover:text-white  rounded-lg font-semibold shadow-md hover:bg-pink-600 transition"
          >
            Yes
          </button>

          <motion.button
            className="px-5 py-2 bg-white text-pink-600 hover:text-white rounded-lg font-semibold shadow-md hover:bg-pink-600 transition "
            animate={{ x: noPos.x, y: noPos.y }}
            transition={{ type: "spring", stiffness: 100 }}
            onMouseEnter={moveNoButton}
          >
            No
          </motion.button>
        </div>
      ) : (
        <>
          <h1 className="text-2xl animate-bounce font-bold text-pink-600  text-center">
            Hurrayyyy!
          </h1>
          <p className="text-lg font-medium text-white group-hover:text-white">
            You have chosen an incredible life partner! 🎉❤️
          </p>
        </>
      )}

      <div className="mt-6 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
        <h2 className="text-lg font-bold text-center text-pink-400">
          ❤️ Terms & Conditions of Our Love ❤️
        </h2>
        <p className="text-sm font-medium text-gray-300 mt-2 text-center">
          🌸 Sometimes ups & downs will come, but we will always handle them
          together. 💑
        </p>
        <p className="text-sm font-light text-gray-400 mt-2 text-center italic">
          (No refunds, only lifetime support & unlimited love! 😘)
        </p>
      </div>
    </div>
  );
}
