import React from 'react';
import './Footer.css';
import insta from "../pics/insta.png";
import linkedin from "../pics/linkedin.png";
import facebook from "../pics/facebook.jpg";

const Footer = () => {
  return (
    <footer className="footer-container">

      {/* 1. Quick Links Section (Unchanged) */}
      <div className="footer-section links-section">
        <h3 className="footer-title quick-links-title">Quick Links</h3>

        <div className="quick-links-grid">
          {/* Column 1 */}
          <div className="link-column">
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
          </div>

          {/* Column 2 */}
          <div className="link-column">
            <a href="/calculator">Solar Calculator</a>
            <a href="/scheme">Government Scheme</a>
          </div>

          {/* Column 3 */}
          <div className="link-column">
            <a href="/services">Product and services</a>
            <a href="/about">About us</a>
          </div>
        </div>
      </div>

      {/* 2. Contact Us / Social Media Section (UPDATED) */}
      <div className="footer-section contact-section">
        <h3 className="footer-title contact-title">Contact us</h3>

        <div className="social-icons">
          {/* Instagram Icon Link */}
          <a
            href="https://www.instagram.com/national_solars5?igsh=MTYyMXprcTRtemxrNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Follow us on Instagram"
          > {/* <-- LINK ADDED (This location is OK) */}
            <img
              src={insta}
              alt="Instagram"
              className="icon-image"
            />
          </a>

          {/* LinkedIn Icon Link */}
          <a
            href="https://www.linkedin.com/in/national-solar-system-85448b3a6"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Connect with us on LinkedIn"
          >
            <img
              src={linkedin} // <-- UPDATE THIS PATH
              alt="LinkedIn"
              className="icon-image"
            />
          </a>

          <a
            href="https://www.facebook.com/share/18EgftFDu1/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Follow us on Facebook"
          > {/* <-- LINK ADDED (This location is OK) */}
            <img
              src={facebook}
              alt="Facebook"
              className="icon-image"
            />
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;