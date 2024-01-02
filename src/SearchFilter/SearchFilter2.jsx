import { useState } from "react";

export default () => {
  const [inputValue, setInputValue] = useState("");
  const list = ["apple", "melon", "pear", "peach", "orange"];

  return (
    <>
      <br />
      <h3>SearchFilter 2</h3>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <ol>
        {list
          .filter((item) => item.includes(inputValue.toLowerCase().trim()))
          .map((filteredItem) => (
            <li>{filteredItem}</li>
          ))}
      </ol>
    </>
  );
};
