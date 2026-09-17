import React from 'react';
import { Link } from 'react-router-dom';
// React Icons: Currency badges for visual interest
import { FaRupeeSign, FaDollarSign, FaEuroSign, FaPoundSign, FaYenSign, FaShieldAlt } from 'react-icons/fa';
import './Footer.css';

/**
 * Footer Component
 * Reused on every page.
 * Displays educational notice, quick links, and active currency badges.
 */
function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Brand and Description */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            Fore<span className="footer-accent">-X-</span>Change
          </div>
          <p className="footer-desc">
            A beginner-friendly foreign exchange platform designed for students, travelers, and NRIs 
            to understand currency conversions and international remittance rates effortlessly.
          </p>
          <div className="currency-pill-row">
            <span className="curr-pill"><FaDollarSign /> USD</span>
            <span className="curr-pill"><FaEuroSign /> EUR</span>
            <span className="curr-pill highlight-pill"><FaRupeeSign /> INR (NRI)</span>
            <span className="curr-pill"><FaPoundSign /> GBP</span>
            <span className="curr-pill"><FaYenSign /> JPY</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col links-col">
          <h4 className="footer-heading">Quick Navigation</h4>
          <ul className="footer-links-list">
            <li><Link to="/">Home Overview</Link></li>
            <li><Link to="/converter">Currency & NRI Converter</Link></li>
            <li><Link to="/rates">Live Exchange Rates</Link></li>
            <li><Link to="/about">About Forex & NRIs</Link></li>
            <li><Link to="/contact">Get in Touch</Link></li>
          </ul>
        </div>

        {/* Educational Disclaimer Column */}
        <div className="footer-col disclaimer-col">
          <h4 className="footer-heading">
            <FaShieldAlt className="disclaimer-icon" /> Educational Demo
          </h4>
          <p className="footer-disclaimer">
            All currency pairs, rates, and calculations displayed on this website are hardcoded sample values 
            for learning, mock demonstration, and browser testing purposes.
          </p>
          <p className="footer-copy">
            © {new Date().getFullYear()} Fore-X-Change. Built with React & React Router.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
