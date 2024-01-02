import { useState } from "react";
import "./ImageSlider2.css";

export default () => {
  const array = [
    {
      id: 0,
      url: "https://images.unsplash.com/photo-1498550744921-75f79806b8a7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9yaXpvbnRhbCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      url: "https://media.istockphoto.com/id/603164912/photo/suburb-asphalt-road-and-sun-flowers.jpg?s=612x612&w=0&k=20&c=qLoQ5QONJduHrQ0kJF3fvoofmGAFcrq6cL84HbzdLQM=",
    },
    {
      id: 3,
      url: "https://www.ephotozine.com/articles/how-to-use-horizontal-lines-successfully-in-your-images-17104/images/xlg_P9020034_dxo.jpg",
    },
  ];

  const [imageId, setImageId] = useState(0);
  const filteredArray = array.filter((el) => el.id === imageId)[0];

  return (
    <>
      <br />
      <h3>Slider 2</h3>
      <br />

      <div className="slider">
        <div className="slide">
          <figure>
            <img src={filteredArray.url} />
          </figure>
        </div>
      </div>

      <div className="sliderNav">
        <button
          onClick={(e) => setImageId(imageId === 0 ? imageId : imageId - 1)}
        >
          Prev
        </button>
        <button
          onClick={(e) =>
            setImageId(imageId === array.length - 1 ? imageId : imageId + 1)
          }
        >
          Next
        </button>
      </div>
    </>
  );
};
