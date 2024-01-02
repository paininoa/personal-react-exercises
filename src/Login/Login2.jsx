import { useState } from "react";
import "./Login.css";

export default () => {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPass, setUserPass] = useState();
  const [message, setMessage] = useState();

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

  const user = {
    name: { userName },
    email: { userEmail },
    password: { userPass },
  };

  return (
    <>
      <br />
      <h3>Login 2</h3>
      <br />
      <div>
        <label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          username
        </label>
        <label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          email
        </label>
        <label>
          <input
            type="password"
            value={userPass}
            onChange={(e) => setUserPass(e.target.value)}
          />
          password
        </label>
        <br />
        <button
          onClick={() => {
            if (
              users.some(
                (user) =>
                  user.name === userName &&
                  user.email === userEmail &&
                  user.password === userPass
              )
            ) {
              setMessage(`Welcome back ${userName}!`);
            } else {
              setMessage("Error, try again.");
            }
          }}
        >
          Login
        </button>
      </div>

      <h4>{message}</h4>
    </>
  );
};
