import React, { useState } from "react";
import Header from "./dashboard/Header";
import "./Home.css";

export default function Home() {
  const bucket = [
    "assets/img/img1.jpeg",
    "assets/img/img2.jpeg",
    "assets/img/img3.jpeg",
  ];

  const [images, setImages] = useState(bucket);

  const handleDelete = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    // const updatedToggleStates = toggleStates.filter((_, i) => i !== index);
    setImages(updatedImages);
    // setToggleStates(updatedToggleStates);
  };
  return (
    <div>
      <Header />
	  <h1>Gallery</h1>
	  <div className="card-container">
        {images.map((image, index) => (
          <div className="card" key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="card-image"
            />
          </div>
        ))}
		</div>
    </div>
  );
}
