import { useState } from "react";
import "./App.css";
import SearchFilter from "./SearchFilter/SearchFilter";
import SimpleCounter from "./SimpleCounter/SimpleCounter";
import DisplayList from "./DisplayList/DisplayList";
import Accordion from "./Accordion/Accordion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>
        personal-react-exercises <br />
        8/12
      </h1>

      <SearchFilter />

      <SimpleCounter />

      <DisplayList />

      <div className="explanation">
        <h2>4. Build Accordion in React</h2>
        <p>
          Creating an accordion that toggles text content on click of the
          accordion header using React State and conditional rendering.
          <br /> <br /> The following are the steps to create an accordion in
          React JS:
        </p>
        <ol>
          <li>Display every title of accordion with body.</li>
          <li>Hide every accordion body using element.display = none;</li>
          <li>Toggle visibility of accordion body on click of title.</li>
        </ol>
      </div>

      <Accordion
        title={"Accordion 1"}
        content={"Lorem ipsum dolor sit amet consectetur adipisicing."}
      />
      <Accordion
        title={"Accordion 2"}
        content={"Lorem ipsum dolor sit amet consectetur adipisicing."}
      />
      <Accordion
        title={"Accordion 3"}
        content={"Lorem ipsum dolor sit amet consectetur adipisicing."}
      />
    </>
  );
}

export default App;
