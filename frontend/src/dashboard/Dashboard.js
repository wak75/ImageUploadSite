import React from 'react'
import './Dashboard.css' 

export default function Dashboard() {
  return (
    <div>
      <header>
    <nav className="navbar">
      <div className="navdiv">
        <div><a href="\">ImageUpload</a></div>
        <div className="divimg">
          <img src="/assets/img/user.png" alt=""/>
        </div>
      </div>
    </nav>
  </header>
  <div className="container">
    <div className="upload">
      <label className="upload-button">
        Upload File
        <input type="file" class="upload-input"/>
      </label>
    </div>
  </div>
    </div>
  )
}
