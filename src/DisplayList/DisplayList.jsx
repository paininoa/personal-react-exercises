export default () => {
  const array = ["claudio", "constantine", "chiara", "carla"];

  return (
    <>
      <div className="explanation">
        <h2>3. Display a list in React</h2>
        <p>
          React code to print each item from the list on the page using
          Array.map() function to display each item on the page.
          <br /> <br /> The list of items is displayed using React JS through
          the following steps:
        </p>
        <ol>
          <li>Declare list of items as JS Array.</li>
          <li>Access each item using Array.map()</li>
          <li>Return JSX code in callback function for every item.</li>
        </ol>
      </div>

      {array.map((item, index) => (
        <p key={`item${index}`}>{item}</p>
      ))}
    </>
  );
};
