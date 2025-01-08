import { useState } from "react";
import "../index.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    return setCount(count + 1);
  };
  const decrement = () => {
    return setCount(count - 1);
  };
  const reset = () => {
    return setCount(0);
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h2 className="text-2xl text-orange-600 font-bold tracking-wide mb-6">
        Count: {count}
      </h2>
      <div className="flex justify-center items-center space-x-4">
        <button
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition duration-300"
          onClick={increment}
        >
          +
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition duration-300"
          onClick={decrement}
        >
          -
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-300"
          onClick={reset}
        >
          ⟳
        </button>
      </div>
    </div>
  );
};

export default Counter;
