import React from 'react';
import { Link } from 'react-router-dom';
// React Icons: Ticker arrows, features, and background ambient icons
import { 
  FaArrowRight, 
  FaChartLine, 
  FaRupeeSign, 
  FaDollarSign, 
  FaEuroSign, 
  FaPoundSign, 
  FaYenSign, 
  FaGlobeAmericas,
  FaShieldAlt,
  FaArrowUp,
  FaArrowDown
} from 'react-icons/fa';
import './Home.css';

/**
 * Home Page Component
 * Theme: Dark Blue (#0d1b2a) with crisp white/cyan text.
 * Features:
 * 1. Ambient react-icons floating in the background
 * 2. Live-rate style ticker banner with sample rates
 * 3. Hero section with clear call-to-action buttons
 * 4. 3 Highlight metric cards
 */
function Home() {
  // Sample hardcoded live rates for the ticker banner
  const sampleTickerRates = [
    { pair: 'USD / INR', rate: '83.54', change: '+0.12%', isUp: true, tag: 'NRI Favorite' },
    { pair: 'EUR / USD', rate: '1.085', change: '-0.08%', isUp: false },
    { pair: 'GBP / INR', rate: '106.20', change: '+0.34%', isUp: true, tag: 'Popular Remit' },
    { pair: 'USD / JPY', rate: '155.40', change: '+0.45%', isUp: true },
    { pair: 'EUR / INR', rate: '90.65', change: '+0.18%', isUp: true }
  ];

  return (
    <div className="home-page-root">
      
      {/* Background Ambient React Icons Effect */}
      <div className="ambient-bg-icons" aria-hidden="true">
        <FaRupeeSign className="ambient-icon ambient-icon-1" />
        <FaDollarSign className="ambient-icon ambient-icon-2" />
        <FaEuroSign className="ambient-icon ambient-icon-3" />
        <FaPoundSign className="ambient-icon ambient-icon-4" />
      </div>

      {/* Live Rate Style Ticker Banner */}
      <section className="live-rate-banner">
        <div className="banner-container">
          <div className="banner-badge">
            <span className="live-dot"></span> LIVE SAMPLE RATES
          </div>
          <div className="ticker-cards-row">
            {sampleTickerRates.map((item, index) => (
              <div key={index} className="ticker-pill">
                <span className="ticker-pair">{item.pair}</span>
                <span className="ticker-val">{item.rate}</span>
                <span className={`ticker-change ${item.isUp ? 'positive' : 'negative'}`}>
                  {item.isUp ? <FaArrowUp size={10} /> : <FaArrowDown size={10} />}
                  {item.change}
                </span>
                {item.tag && <span className="nri-badge">{item.tag}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Main Section */}
      <section className="home-hero">
        <div className="hero-content">
          <div className="hero-tag">
            <FaGlobeAmericas /> Fast, Simple & Transparent Forex
          </div>
          
          <h1 className="hero-title">
            Smart Foreign Exchange &amp; <br />
            <span className="hero-gradient-text">NRI Remittance</span> Calculator
          </h1>
          
          <p className="hero-subtitle">
            Welcome to Fore-X-Change! Whether you are a student studying abroad, 
            an NRI sending money home to India (INR), or learning currency trading basics, 
            explore real-time style rates with zero complexity.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <Link to="/converter" className="btn-primary">
              Get Started <FaArrowRight className="btn-icon" />
            </Link>
            <Link to="/rates" className="btn-secondary">
              View All Rates <FaChartLine className="btn-icon" />
            </Link>
          </div>

          {/* 3 Quick Value Badges */}
          <div className="hero-highlights-grid">
            <div className="highlight-card">
              <div className="card-icon-box">
                <FaRupeeSign />
              </div>
              <div className="card-info">
                <h3>NRI Focused</h3>
                <p>Instant conversions for USD, GBP &amp; EUR into Indian Rupees (INR).</p>
              </div>
            </div>

            <div className="highlight-card">
              <div className="card-icon-box">
                <FaChartLine />
              </div>
              <div className="card-info">
                <h3>Zero Delay</h3>
                <p>Immediate calculations right inside your browser with clean React state.</p>
              </div>
            </div>

            <div className="highlight-card">
              <div className="card-icon-box">
                <FaShieldAlt />
              </div>
              <div className="card-info">
                <h3>Beginner Friendly</h3>
                <p>Simple math, well-commented code, and intuitive visual navigation.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
