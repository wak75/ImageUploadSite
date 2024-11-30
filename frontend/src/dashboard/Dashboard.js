import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { BsImage } from "react-icons/bs";
import Header from "./Header";
import {useNavigate} from 'react-router-dom'
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';

const bucket = [
  "assets/img/img1.jpeg",
  "assets/img/img2.jpeg",
  "assets/img/img3.jpeg",
];

export default function Dashboard() {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const isToken = localStorage.getItem('token');
  let userData = null;
  let userName = null;
  if (isToken){
  userData = jwtDecode(isToken);
  userName= userData.user.name;
  }
  

  const fetchData = async () => { 
   try {
        const response = await fetch(`http://localhost:4500/api/images/${userName}/allimages`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${isToken}`,
          }
        });
        const data = await response.json();
        console.log(data);
        setImages(data);
        console.log(images);
      } catch (error) {
        console.log(`${error}`);
      }
    
  };
 
  useEffect(() => {
    if (!isToken) {
      navigate('/login');
    } else {    
    fetchData();
    }
  }, [navigate]);

  const handleDelete = async (id) => {
    console.log(isToken);
    try{
      const response=  await axios.post(`http://localhost:4500/api/images/${userName}/${id}/delete`,"",{
        headers: {
          Authorization:`Bearer ${isToken}`,
        }
      });

      console.log(response);
      fetchData();
    }catch(error){
      console.log("Erorr in deleting image", error);
    }

  };

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post(`http://localhost:4500/api/images/${userName}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${isToken}`
        },
      });
      console.log(response);
      fetchData();
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleSwitchChange =  async(id) => {
   try{
    const response = await axios.post(`http://localhost:4500/api/images/${userName}/${id}/visibility`, "", {
      headers: {
        Authorization: `Bearer ${isToken}`,
      },
    });
    fetchData();

    console.log(response);
  }catch(error){
    console.log("Error in updating image", error);
  }
  console.log("Switch changed");
  };

  return (
    <div>
     <Header/>
     <h1>Dashboard</h1>
      <div className="card-container">
        {images.map((image) => (
          <div className="card" key={image._id}>
            <img
              src={image.imageUrl}
              className="card-image"
            />
            <div className="card-actions">
              <FormControlLabel
                label="Private"
                control={<Switch checked={!image.isPublic}   onChange={() => handleSwitchChange(image._id)}/>}
                labelPlacement="start"
              />
              <button onClick={() => handleDelete(image._id)}>Delete</button>
            </div>
          </div>
        ))}
        <div className="uploadcard">
        <label htmlFor="drop-file" className="uploadLabel">
          <BsImage className="uploadIcon" />
          <h2>Add Images</h2>
          <input type="file" name="gallery-img" id="drop-file" hidden onChange={handleUpload} />
        </label>
      </div>
      </div>

    </div>
  );
}
