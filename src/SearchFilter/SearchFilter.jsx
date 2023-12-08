import React, { useState } from "react";
import "./SearchFilter.css";

export default () => {
  const fruits = [
    "apple",
    "orange",
    "pear",
    "melon",
    "watermelon",
    "peach",
    "lemon",
  ];

  const [filteredList, setFilteredList] = useState(fruits);
  const handleSearch = (e) => {
    if (e.target.value === "") {
      setFilteredList(list);
      return;
    }
  };

  return (
    <>
      <h2>1. Build Search filter in React</h2>
      <p>
        React code to build a simple search filter functionality to display a
        filtered list based on the search query entered by the user.
      </p>
      <ul>
        {fruits.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
      <label>
        Search:
        <input type="text" onChange={handleSearch} />
      </label>
    </>
  );
};
