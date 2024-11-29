import React, { useState } from "react";
import "./Header.css";

function Header(props) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="navdiv">
            <div>
              <a href="\">ImageUpload</a>
            </div>
            <div className="divimg" onClick={toggleMenu}>
              <img src="/assets/img/user.png" alt="" />
              {menuVisible && (
                <div className="menu">
                  <ul>
                    <li>
                      <a className="dText" href="/dashboard">Dashboard</a>
                    </li>
                    <li>
                      <a className="lText" href="/logout">Logout</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
