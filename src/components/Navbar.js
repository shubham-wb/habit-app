import React from "react";
import "../assets/css/Navbar.css";
import menu from "../assets/images/menu_white.svg";
function Navbar() {
  let today = new Date().toLocaleDateString();
  return (
    <>
      <nav>
        <div className="side">
          <button id="side-button">
            <img src={menu}></img>
          </button>
        </div>
        <h2>Habit App</h2>

        <div>{today}</div>
      </nav>
    </>
  );
}

export default Navbar;
