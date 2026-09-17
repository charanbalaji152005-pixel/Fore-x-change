import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
// React Icons: Importing clean vector icons for currency and UI
import { FaExchangeAlt, FaCoins, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

/**
 * Navbar Component
 * Beginner Friendly:
 * - Uses React Router's `NavLink` to highlight active links.
 * - Uses `useState` to toggle the responsive mobile menu open and closed.
 */
function Navbar() {
  // useState hook: tracks whether mobile navigation dropdown is open (true) or closed (false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Helper function to close the menu whenever a user clicks a link
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        
        {/* Brand / Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon-wrap">
            <FaCoins className="brand-icon" />
          </span>
          <span className="logo-text">
            Fore<span className="logo-highlight">-X-</span>Change
          </span>
        </Link>

        {/* Mobile Hamburger Toggle Button */}
        <button 
          className="mobile-toggle-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav className={`navbar-links ${mobileMenuOpen ? 'nav-active' : ''}`}>
          {/* NavLink automatically adds an "active" class to the link matching the current route */}
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'nav-item active-home' : 'nav-item')} 
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink 
            to="/converter" 
            className={({ isActive }) => (isActive ? 'nav-item active-converter' : 'nav-item')} 
            onClick={closeMenu}
          >
            Currency Converter
          </NavLink>

          <NavLink 
            to="/rates" 
            className={({ isActive }) => (isActive ? 'nav-item active-rates' : 'nav-item')} 
            onClick={closeMenu}
          >
            Exchange Rates
          </NavLink>

          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? 'nav-item active-about' : 'nav-item')} 
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? 'nav-item active-contact' : 'nav-item')} 
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
