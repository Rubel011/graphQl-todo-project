import React, { useState } from "react";
import "./counter.css";
function Counter() {
  const [number, setNumber] = useState(0);
  const incrementFunc = () => {
    setNumber(number + 1);
  };
  const decrementFunc = () => {
    if (number === 0) return;
    setNumber(number - 1);
  };

  return (
    <>
      <div className="counter-app">
        <h1>Counter App</h1>
        <div className="counter-value">{number}</div>
        <div className="button-container">
          <button className="increment-button" onClick={incrementFunc}>
            Increment by 1 +
          </button>
          <button className="decrement-button" onClick={decrementFunc}>
            Decrement by 1 -
          </button>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Redirect to previous page
        </button>
      </div>
    </>
  );
}

export default Counter;
