import { useState } from "react";
import "./Accordion.css";

export default ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const accordionOpenClose = (e) => {
    setIsOpen((current) => !current);
  };

  return (
    <>
      <div onClick={accordionOpenClose} className="accordionWrapper">
        <div className="accordionTitleWrapper">
          <h4>{title}</h4>
        </div>
        <div className={isOpen ? "open" : "close"}>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};
