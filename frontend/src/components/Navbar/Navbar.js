import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };


  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" className="logo-image" />
        <Link to="/" className="navbar-brand">CODESPHERE</Link>
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
          <a href="#home" className="navbar-link" onClick={handleLinkClick}>Home</a>
        </li>
        <li className="navbar-item">
          <a href="#compiler" className="navbar-link" onClick={handleLinkClick}>Compiler</a>
        </li>
        <li className="navbar-item">
          <a href="#collection" className="navbar-link" onClick={handleLinkClick}>Collection</a>
        </li>
        <li className="navbar-item">
          <a href="#connect" className="navbar-link" onClick={handleLinkClick}>Connect</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
