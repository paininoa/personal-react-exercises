import { useState } from "react";

export default () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <>
      <br />
      <h3>Accordion 2</h3>
      <br />

      <div className="accordion">
        <h4 className="accordion-title" onClick={(e) => setIsOpen(!isOpen)}>
          Accordion title
        </h4>
        <div className={isOpen === true ? "open" : "close"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
          tempora.
        </div>
      </div>
    </>
  );
};
