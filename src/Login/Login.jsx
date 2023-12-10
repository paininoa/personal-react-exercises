import { useState } from "react";
import "./Login.css";

const users = [
  {
    name: "alessio",
    email: "alessio@gmail.com",
    password: "ciao123",
  },
  {
    name: "Anna",
    email: "anna@gmail.com",
    password: "hello555",
  },
];

export default () => {
  const [userName, setUserName] = useState("");

  return (
    <>
      <form>
        <label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          Name
        </label>
        <label>
          <input type="email" />
          Email
        </label>
        <label>
          <input type="password" />
          Password
        </label>
        <button>Check</button>
      </form>

      <h3>{userName}</h3>
    </>
  );
};
