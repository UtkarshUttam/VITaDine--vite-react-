// components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/media/CodeCrafters.png";
import "./Header.css";

const Header = ({ selectedOption, handleToggle }) => {
  return (
    <div className="header">
      <div className="headerLine1">
        <div className="logoDiv">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="toggle-slider">
          <input
            type="checkbox"
            id="toggle"
            onChange={handleToggle}
            className="checkbox"
          />
          <label htmlFor="toggle" className="slider">
            <span className="mayuri">Mayuri</span>
            <span className="underbelly">Underbelly</span>
          </label>
        </div>
      </div>
      <div className="headerLine2">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={`/${selectedOption}-menu`}>Menu</Link>
            </li>
            <li>
              <Link to="/progress">Progress</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
