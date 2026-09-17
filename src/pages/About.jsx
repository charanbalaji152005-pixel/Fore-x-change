import React from 'react';
import { Link } from 'react-router-dom';
// React Icons: Educational icons and background ambient icons
import { 
  FaBookOpen, 
  FaGlobe, 
  FaExchangeAlt, 
  FaLightbulb, 
  FaRupeeSign, 
  FaDollarSign, 
  FaEuroSign, 
  FaPoundSign, 
  FaArrowRight,
  FaShieldAlt
} from 'react-icons/fa';
import './About.css';

/**
 * About Page Component
 * Theme: Orange (#e65100) highlights.
 * Features:
 * 1. Introduction to Fore-X-Change
 * 2. Clear explanation of what Forex (Foreign Exchange) is
 * 3. 3-Card Feature Section highlighting core strengths
 * 4. Special spotlight on NRI inward remittances
 */
function About() {
  return (
    <div className="about-page-root">
      
      {/* Background Ambient React Icons Effect */}
      <div className="ambient-bg-icons" aria-hidden="true">
        <FaRupeeSign className="ambient-icon ambient-icon-1" />
        <FaDollarSign className="ambient-icon ambient-icon-2" />
        <FaEuroSign className="ambient-icon ambient-icon-3" />
        <FaPoundSign className="ambient-icon ambient-icon-4" />
      </div>

      <div className="about-container">
        
        {/* Header */}
        <div className="about-header">
          <span className="about-pill">
            <FaBookOpen /> Knowledge &amp; Mission
          </span>
          <h1 className="about-title">Demystifying Foreign Exchange for Beginners</h1>
          <p className="about-subtitle">
            Fore-X-Change was created to provide a simple, welcoming, and transparent 
            environment for anyone looking to understand how currencies interact globally.
          </p>
        </div>

        {/* What is Forex Section */}
        <div className="forex-explainer-card">
          <div className="explainer-badge">
            <FaLightbulb /> What is Forex?
          </div>
          <h2>The Global Marketplace for World Currencies</h2>
          <p>
            <strong>Forex (Foreign Exchange or FX)</strong> is the world’s largest decentralized financial market, 
            where trillions of dollars worth of international currencies are bought, sold, and exchanged every day. 
            Whenever an international traveler exchanges dollars for rupees, an importer purchases goods from Europe, 
            or an NRI sends money home to family in India, they participate in the foreign exchange ecosystem.
          </p>
          <div className="forex-stats-row">
            <div className="stat-item">
              <span className="stat-number">$7.5 Trillion+</span>
              <span className="stat-label">Daily Global Turnover</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24 Hours / 5 Days</span>
              <span className="stat-label">Active Market Hours</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">180+</span>
              <span className="stat-label">Recognized World Currencies</span>
            </div>
          </div>
        </div>

        {/* 3-Card Feature Section */}
        <section className="features-section">
          <div className="section-title-wrap">
            <h2 className="section-title">Why Use Fore-X-Change?</h2>
            <p className="section-subtitle">Three core pillars that make this application fast, transparent, and easy to learn.</p>
          </div>

          <div className="features-grid">
            
            {/* Card 1 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <FaGlobe className="feature-icon" />
              </div>
              <span className="feature-step">01</span>
              <h3>Simulated Live Feeds</h3>
              <p>
                Experience live-style currency price fluctuations without needing a complex brokerage account. 
                Perfect for classroom learning, personal budgeting, and mock calculations.
              </p>
            </div>

            {/* Card 2 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <FaExchangeAlt className="feature-icon" />
              </div>
              <span className="feature-step">02</span>
              <h3>NRI Remittance Focus</h3>
              <p>
                Dedicated calculations tailored for the Indian diaspora worldwide. Convert USD, EUR, GBP, or JPY 
                directly into Indian Rupees (INR) with clear per-unit exchange transparency.
              </p>
            </div>

            {/* Card 3 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <FaShieldAlt className="feature-icon" />
              </div>
              <span className="feature-step">03</span>
              <h3>100% Beginner Friendly</h3>
              <p>
                Built with clean, uncluttered React code using native state hooks. No complex financial jargon, 
                no hidden calculations, and no third-party tracking cookies.
              </p>
            </div>

          </div>
        </section>

        {/* Call to Action Banner */}
        <div className="about-cta-card">
          <div className="cta-text">
            <h3>Ready to calculate your currency conversion?</h3>
            <p>Try out our intuitive NRI &amp; global currency converter now.</p>
          </div>
          <Link to="/converter" className="about-cta-btn">
            Open Converter <FaArrowRight />
          </Link>
        </div>

      </div>

    </div>
  );
}

export default About;
