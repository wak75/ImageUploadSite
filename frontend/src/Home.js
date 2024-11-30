import React, { useState, useEffect } from "react";
import Header from "./dashboard/Header";
import "./Home.css";

export default function Home() {
  const bucket = [
    "assets/img/img1.jpeg",
    "assets/img/img2.jpeg",
    "assets/img/img3.jpeg",
  ];


  const [images, setImages] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:4500/gallery", {
            method: 'GET',
          });
          const data = await response.json();
        console.log(data);
		setImages(data);
        } catch (error) {
          console.log(`${error}`);
        }

    };
    fetchData();
  }, []);


//   const [images, setImages] = useState(mainBucket);
//   console.log(images);


  return (
    <div>
      <Header />
	  <h1>Gallery</h1>
	  <div className="card-container">
        {images.map((image) => (
          <div className="card" key={image._id}>
            <img
              src={image.imageUrl}
              className="card-image"
            />
          </div>
        ))}
		</div>
    </div>
  );
}
