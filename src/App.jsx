// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import MenuPage from './components/MenuPage';
// import CartPage from './components/CartPage';
// import ProgressPage from './components/ProgressPage';
// import ContactPage from './components/ContactPage';
// import ConfirmationPage from './components/ConfirmationPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/mayuri-menu" element={<MenuPage stall="mayuri" />} />
          <Route path="/underbelly-menu" element={<MenuPage stall="underbelly" />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
