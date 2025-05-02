import React, { useState } from 'react';
import "./Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className='navbar'>
      <div className="navbar_container">
        <div className="nav_logo">
          <h1>Padipay</h1>
        </div>

        {/* Hamburger / Close Icon */}
        <div className="menu_icon" onClick={toggleMenu}>
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>

        {/* Nav Items */}
        <div className={`nav_items ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>How It Works</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Download Button */}
        <div className="nav_btn">
          <button className="download_btn">Download App</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
