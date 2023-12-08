import React, { useState } from "react";
import "./SimpleCounter.css";

export default () => {
  const [currentCount, setCurrentCount] = useState(0);

  return (
    <>
      <div className="explanation">
        <h2>2. Simple counter exercise</h2>
        <p>
          Creating a simple counter using React which increments or decrements
          count dynamically on-screen as the user clicks on the button. This
          exercise requires knowledge of fundamental React concepts such as
          State, Component, etc. <br /> <br /> We can complete the simple
          counter exercise with the following steps: <br />
        </p>
        <ol>
          <li>Create React state to store the count value.</li>
          <li>
            Declare JS functions to incement or decrement the value through
            setState().
          </li>
          <li>Add HTML buttons with onClick to JSX code.</li>
        </ol>
      </div>
      <h1
        className={
          currentCount < 0 ? "negative" : currentCount > 0 ? "positive" : null
        }
      >
        {currentCount}
      </h1>
      <button onClick={() => setCurrentCount(currentCount - 1)}>-</button>
      <button onClick={() => setCurrentCount(currentCount + 1)}>+</button>
    </>
  );
};
