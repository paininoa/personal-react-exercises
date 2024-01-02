import { useState } from "react";
import "./SimpleCounter.css";

export default () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <br />
      <h4>Simple Counter 2 </h4>
      <h2 className={number > 0 ? "positive" : "negative"}>{number}</h2>
      <button
        onClick={(e) => {
          number === 0 ? setNumber(0) : setNumber(number - 1);
        }}
      >
        -
      </button>
      <button onClick={(e) => setNumber(number + 1)}>+</button>
    </>
  );
};
