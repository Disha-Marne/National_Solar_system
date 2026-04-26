import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from "../pics/logo.jpg";

const NAV_LINKS = [
  { to: '/',            label: 'Home' },
  { to: '/calculator',  label: 'Solar Calculator' },
  { to: '/projects',    label: 'Projects' },
  { to: '/scheme',      label: 'Government Scheme' },
  { to: '/services',    label: 'Products & Services' },
  { to: '/about',       label: 'About Us' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const menuRef                   = useRef(null);
  const toggleRef                 = useRef(null);
  const location                  = useLocation();

  /* Close menu on route change */
  useEffect(() => { setMenuOpen(false); }, [location]);

  /* Sticky background on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close menu when clicking outside */
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (
        menuRef.current   && !menuRef.current.contains(e.target) &&
        toggleRef.current && !toggleRef.current.contains(e.target)
      ) setMenuOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  /* Trap focus inside open mobile menu — accessibility */
  useEffect(() => {
    if (!menuOpen) return;
    const focusable = menuRef.current?.querySelectorAll('a, button');
    focusable?.[0]?.focus();
  }, [menuOpen]);

  return (
    <nav
      className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
      aria-label="Main navigation"
    >
      {/* Logo */}
      <Link to="/" className="navbar__logo" aria-label="National Solar System – Home">
        <img src={logo} alt="National Solar System logo" />
      </Link>

      {/* Hamburger */}
      <button
        ref={toggleRef}
        className={`navbar__toggle${menuOpen ? ' navbar__toggle--open' : ''}`}
        onClick={() => setMenuOpen((v) => !v)}
        aria-expanded={menuOpen}
        aria-controls="navbar-menu"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        <span className="navbar__toggle-bar" />
        <span className="navbar__toggle-bar" />
        <span className="navbar__toggle-bar" />
      </button>

      {/* Links */}
      <ul
        id="navbar-menu"
        ref={menuRef}
        className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}
        role="list"
      >
        {NAV_LINKS.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={location.pathname === to ? 'navbar__link navbar__link--active' : 'navbar__link'}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}

        <li>
          <Link
            to="/contact"
            className="navbar__cta"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile backdrop */}
      {menuOpen && (
        <div
          className="navbar__backdrop"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;