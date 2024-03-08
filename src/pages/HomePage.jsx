// components/HomePage.js
import React, { useState } from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import "./HomePage.css";
import logo from "../assets/media/CodeCrafters.png";

const MayuriPage = () => <h2>Welcome to Mayuri!</h2>;
const UnderbellyPage = () => <h2>Welcome to Underbelly!</h2>;



const HomePage = () => {
  const [selectedOption, setSelectedOption] = useState("mayuri");
  const [checked, setChecked] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
    setSelectedOption(checked ? "mayuri" : "underbelly");
  };

  return (
    <div>
      <div className="box2">
      <header>
        <div className="headerLine1">
          <div className="logoDiv">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="toggle-slider">
            <input
              type="checkbox"
              id="toggle"
              checked={checked}
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
      </header>
      <main>

        <div className="welcome">
        <h1>Welcome to {checked ? 'Underbelly' : 'Mayuri'}!</h1>
        {/* <div className="box2">
        <h3 style={{ color: 'white' }}>Box 2</h3>
      </div> */}
        </div>

        <Routes>
          <Route path="/" element={<Outlet />} />
          <Route path="/mayuri-menu" element={<MayuriPage />} />
          <Route path="/underbelly-menu" element={<UnderbellyPage />} />
        </Routes>
      </main>
      </div>
    </div>
  );
};

export default HomePage;
