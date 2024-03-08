// HomePage.jsx
import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "../components/Header";
import "./HomePage.css"; // You can keep styling related to HomePage here
// import logo from "../assets/media/CodeCrafters.png";
// import MayuriPage from "./MayuriPage";
// import UnderbellyPage from "./UnderbellyPage";

const HomePage = () => {
  const [selectedOption, setSelectedOption] = useState("mayuri");
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
    setSelectedOption(checked ? "mayuri" : "underbelly");
  };

  return (
    <div>
      <div className="box2">
      <Header selectedOption={selectedOption} handleToggle={handleToggle} />
      <main>
        <div className="welcome">
          <h1>Welcome to {checked ? 'Underbelly' : 'Mayuri'}!</h1>
        </div>
        <Routes>
          <Route path="/" element={<Outlet />} />
          {/* <Route path="/mayuri-menu" element={<MayuriPage />} /> */}
          {/* <Route path="/underbelly-menu" element={<UnderbellyPage />} /> */}
        </Routes>
      </main>
      </div>
    </div>
  );
};

export default HomePage;
