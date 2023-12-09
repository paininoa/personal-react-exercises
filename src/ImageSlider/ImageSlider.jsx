import { useState } from "react";
import "./ImageSlider.css";

export default () => {
  const images = [
    {
      title: "Image 1",
      id: "1",
      url: "https://source.unsplash.com/random/?city",
    },
    {
      title: "Image 2",
      id: "2",
      url: "https://source.unsplash.com/random/?beach",
    },
    {
      title: "Image 3",
      id: "3",
      url: "https://source.unsplash.com/random/?mountain",
    },
    {
      title: "Image 4",
      id: "4",
      url: "https://source.unsplash.com/random/?desert",
    },
  ];

  const { negativeMargin, setNegativeMargin } = useState(0);

  return (
    <div className="overflowHideen">
      <div
        style={{ marginLeft: `-${negativeMargin}%` }}
        className="sliderWrapper"
      >
        {images.map((imageObj, imageIndex) => {
          return (
            <figure className="slide" key={`image${imageIndex}`}>
              <img
                className="sliderImg"
                src={imageObj.url}
                alt={imageObj.title}
              />
            </figure>
          );
        })}
      </div>
      <div className="sliderNav">
        <button onClick={() => setNegativeMargin(negativeMargin + 100)}>
          Prev
        </button>
        <button onClick={() => setNegativeMargin(negativeMargin - 100)}>
          Next
        </button>
      </div>
    </div>
  );
};
