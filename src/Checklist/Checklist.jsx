import { useState } from "react";
import "./Checklist.css";

export default () => {
  let object = {
    isCitizen: false,
    isOver18: false,
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked((current) => !current);
  };

  return (
    <>
      <form>
        <h3>Are you a citizen? {isChecked ? "Yes" : "No"}</h3>
        <h3>Are you 18 or older? {isChecked ? "Yes" : "No"}</h3>

        <label>
          <input type="checkbox" checked={isChecked} onChange={handleChange} />I
          am a citizen
        </label>
        <label>
          <input type="checkbox" checked={isChecked} onChange={handleChange} />I
          am 18 or older
        </label>
      </form>
    </>
  );
};
