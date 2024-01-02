import { useEffect, useState } from "react";
import "./App.css";
import SearchFilter from "./SearchFilter/SearchFilter";
import SimpleCounter from "./SimpleCounter/SimpleCounter";
import DisplayList from "./DisplayList/DisplayList";
import Accordion from "./Accordion/Accordion";
import ImageSlider from "./ImageSlider/ImageSlider";
import Checklist from "./Checklist/Checklist";
import Login from "./Login/Login";
import PokemonApi from "./PokemonApi/PokemonApi";
import SearchFilter2 from "./SearchFilter/SearchFilter2";
import SimpleCounter2 from "./SimpleCounter/SimpleCounter2";
import Displaylist2 from "./DisplayList/Displaylist2";
import Accordion2 from "./Accordion/Accordion2";
import ImageSlider2 from "./ImageSlider/ImageSlider2";
import Checklist2 from "./Checklist/Checklist2";
import Login2 from "./Login/Login2";
import PokemonAPI2 from "./PokemonApi/PokemonAPI2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>
        personal-react-exercises <br />
        8/12
      </h1>

      <SearchFilter />
      <SearchFilter2 />

      <SimpleCounter />
      <SimpleCounter2 />

      <DisplayList />
      <Displaylist2 />

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

      <Accordion2 />

      <div className="explanation">
        <h2 className="red">FIRST NOT WORKING</h2>
        <h2 className="green">SECOND WORKING!!</h2>
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
      <ImageSlider2 />

      <div className="explanation">
        <h2 className="red">FIRST NOT WORKING</h2>
        <h2 className="green">SECOND WORKING!!</h2>
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
      <Checklist2 />

      <div className="explanation">
        <h2 className="red">FIRST NOT WORKING</h2>
        <h2 className="green">SECOND WORKING!!</h2>

        <h2>7. Simple Login form in React</h2>
        <p>
          React code for simple login form where the user login by entering
          their username and password. The form inputs are validated to check if
          correct information is entered and the error messages are the
          validation fails. The login form is hidden and the “Welcome, ${name}”
          message is shown when the user login is successful.
          <br /> <br /> The following are the steps to create a simple login
          form using React JS:
        </p>
        <ol>
          <li>Create name, email and password input form elements.</li>
          <li>React States to store user input values.</li>
          <li>
            Add form validation for compare name, email and password with
            correct values.
          </li>
          <li>
            Display “Welcome, ${name}” if login is successful, else display the
            error message.
          </li>
        </ol>
      </div>

      <Login />
      <Login2 />

      <div className="explanation">
        <h2>8. Print data from REST API</h2>
        <p>
          React code to collect data from rest API using fetch() in JavaScript
          combined with useEffect() to load the content on page render.
          <br /> <br /> The following are the steps to print data from REST API
          in React JS:
        </p>
        <ol>
          <li>Create React state to store the API response.</li>
          <li>
            Declare State to Component JSX code to display the API response.
          </li>
          <li>JS function where API call is through axios.get() or fetch().</li>
          <li>
            Add callback function to update the React state with API response.
          </li>
          <li>Add HTML button with JS function with onChange attribute.</li>
        </ol>
      </div>

      <PokemonApi />
      <PokemonAPI2 />
    </>
  );
}

export default App;
