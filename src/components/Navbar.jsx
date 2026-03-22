import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import logo from "../pics/logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-container-final">

      <section className="logo">
        <img src={logo} alt="logo" />
      </section>

      {/* Hamburger Button (mobile only) */}
      <div 
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={`navbar-links-final ${menuOpen ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">Solar Calculator</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/scheme">Government Scheme</Link></li>
        <li><Link to="/services">Product and Services</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li>
          <Link to="/contact" className="contact-button-final">
            Contact
          </Link>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
