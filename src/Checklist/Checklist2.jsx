import { useState } from "react";

export default () => {
  const [isCitizen, setIsCitizen] = useState();
  const [is18, setIs18] = useState();

  return (
    <>
      <br />
      <h3>Checklist 2</h3>
      <br />

      <label>
        <input
          type="checkbox"
          name="citizen"
          value={isCitizen}
          onChange={(e) => setIsCitizen(!isCitizen)}
        />
        Are you a citizen?
      </label>

      <label>
        <input
          type="checkbox"
          name="is18"
          value={is18}
          onChange={(e) => setIs18(!is18)}
        />
        Are 18 or older?
      </label>

      <p>{isCitizen === true ? "I am a citizen" : ""}</p>
      <p>{is18 && `I am 18 or older`}</p>
    </>
  );
};
