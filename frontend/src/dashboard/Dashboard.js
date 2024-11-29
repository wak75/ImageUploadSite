import React, { useState } from "react";
import "./Dashboard.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { BsImage } from "react-icons/bs";

const bucket = [
  "assets/img/img1.jpeg",
  "assets/img/img2.jpeg",
  "assets/img/img3.jpeg",
];

export default function Dashboard() {
  const [images, setImages] = useState(bucket);

  const handleDelete = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    // const updatedToggleStates = toggleStates.filter((_, i) => i !== index);
    setImages(updatedImages);
    // setToggleStates(updatedToggleStates);
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="navdiv">
            <div>
              <a href="\">ImageUpload</a>
            </div>
            <div className="divimg">
              <img src="/assets/img/user.png" alt="" />
            </div>
          </div>
        </nav>
      </header>
      <div className="card-container">
        {images.map((image, index) => (
          <div className="card" key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="card-image"
            />
            <div className="card-actions">
              <FormControlLabel
                label="Private"
                control={<Switch defaultChecked />}
                labelPlacement="start"
              />
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
        <div className="uploadcard">
        <label htmlFor="drop-file" className="uploadLabel">
          <BsImage className="uploadIcon" />
          <h2>Add Images</h2>
          <input type="file" name="gallery-img" id="drop-file" hidden />
        </label>
      </div>
      </div>

    </div>
  );
}
