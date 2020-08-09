import React from "react";
import logo from "./logo.svg";
import "./Nav.css";
function Nav() {
  return (
    <div className="nav">
      <img className="first" src={logo} alt="Logo" />;
      <div className="navbar">
        <a href="#" class="nav-link">
          Home
        </a>
        <a href="#" class="nav-link">
          About
        </a>
        <a href="#" class="nav-link">
          Working On
        </a>
        <a href="#" class="nav-link">
          Skills
        </a>
        <a href="#" class="nav-link">
          Contact
        </a>
      </div>
    </div>
  );
}
export default Nav;
