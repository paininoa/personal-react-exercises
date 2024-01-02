export default () => {
  const list = ["asf", "sfg", "wer"];

  return (
    <>
      <br />
      <h4>Display List 2</h4>
      <ol>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ol>
    </>
  );
};
