import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" className="logo-image" />
        <a href="/">CODESPHERE</a>
      </div>
      
      {/* Hamburger icon for small screens */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navbar links */}
      <ul className={`navbar-list ${isMenuOpen ? 'show' : ''}`}>
        <li className="navbar-item">
          <a href="/" className="navbar-link">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/" className="navbar-link">Compiler</a>
        </li>
        <li className="navbar-item">
          <a href="/" className="navbar-link">Collection</a>
        </li>
        <li className="navbar-item">
          <a href="/" className="navbar-link">Connect</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
