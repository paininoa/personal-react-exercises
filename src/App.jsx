import { useState } from "react";
import "./App.css";
import SearchFilter from "./SearchFilter/SearchFilter";
import SimpleCounter from "./SimpleCounter/SimpleCounter";
import DisplayList from "./DisplayList/DisplayList";
import Accordion from "./Accordion/Accordion";
import ImageSlider from "./ImageSlider/ImageSlider";
import Checklist from "./Checklist/Checklist";

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

      <div className="explanation">
        <h2 className="red">NOT WORKING</h2>
        <h2>5. Image Slider using React JS</h2>
        <p>
          React exercise to create an image slide, where users can view multiple
          images with next/previous buttons. Additionally, there is also an
          option to select an image from any index of the list through a
          click-on option circle.
          <br /> <br /> The following are the steps to create an image slider in
          React JS:
        </p>
        <ol>
          <li>Declare array of objects with id and image url.</li>
          <li>
            For pre/next functionality, we decrement/increment count of the
            index of active image.
          </li>
          <li>Update active image index with clicked option.</li>
        </ol>
      </div>

      <ImageSlider />

      <div className="explanation">
        <h2 className="red">NOT WORKING</h2>
        <h2>6. Create a Checklist in React</h2>
        <p>
          React code to display a checklist with multiple options that can
          select and the selected options are dynamically displayed on the
          screen. React State is used to keep track of checked options and
          onChange() Event handler is triggered to alter the state whenever an
          option is checked or unchecked.
          <br /> <br /> The following are the steps to create a Checklist in
          React JS:
        </p>
        <ol>
          <li>Create React state to track checkbox value.</li>
          <li>
            Function to update checkbox value based on event.target.checked
          </li>
          <li>
            Add checkbox input element to JSX code with onChange function.
          </li>
        </ol>
      </div>

      <Checklist />
    </>
  );
}

export default App;
