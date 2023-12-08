import { useState } from "react";
import "./App.css";
import SearchFilter from "./SearchFilter/SearchFilter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>
        personal-react-exercises <br />
        8/12
      </h1>

      <SearchFilter />
    </>
  );
}

export default App;
