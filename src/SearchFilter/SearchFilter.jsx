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

  const [list, setList] = useState(fruits);

  const handleSearch = (e) => {
    const filteredList = fruits.filter((item) =>
      item.startsWith(e.target.value)
    );
    setList(filteredList);
  };

  return (
    <>
      <div className="explanation">
        <h2>1. Build Search filter in React</h2>
        <p>
          React code to build a simple search filter functionality to display a
          filtered list based on the search query entered by the user. <br />
          <br />
          The following are the steps to create a Search filter using React JS:{" "}
        </p>
        <ol>
          <li>Declare React states for search input values.</li>
          <li>
            Create HTML input text for entering search term and update state in
            onChange function.
          </li>
          <li>Add Array.filter() on list of items with search term value.</li>
        </ol>
      </div>

      <ul>
        {list.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
      <label>
        Search:
        <input
          type="text"
          onChange={(e) => {
            handleSearch(e);
          }}
        />
      </label>
    </>
  );
};
