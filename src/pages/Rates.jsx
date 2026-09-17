import React, { useState } from 'react';
// React Icons: Table indicators, search icon, and ambient background icons
import { 
  FaTable, 
  FaSearch, 
  FaArrowUp, 
  FaArrowDown, 
  FaRupeeSign, 
  FaDollarSign, 
  FaEuroSign, 
  FaPoundSign, 
  FaYenSign,
  FaClock
} from 'react-icons/fa';
import './Rates.css';

/**
 * Exchange Rates Page Component
 * Theme: Purple (#6a1b9a) table header, light gray rows with smooth hover effect.
 * Displays currency pairs, bid/ask prices, 24-hour percentage changes, and a filter search bar.
 */
function Rates() {
  // Sample hardcoded Forex currency pairs data
  const initialRatesData = [
    { id: 1, pair: 'USD / INR', name: 'US Dollar to Indian Rupee', bid: '83.50', ask: '83.54', change: '+0.15%', isUp: true, category: 'NRI Major' },
    { id: 2, pair: 'EUR / INR', name: 'Euro to Indian Rupee', bid: '90.62', ask: '90.68', change: '+0.22%', isUp: true, category: 'NRI Major' },
    { id: 3, pair: 'GBP / INR', name: 'British Pound to Indian Rupee', bid: '106.15', ask: '106.24', change: '+0.38%', isUp: true, category: 'NRI Major' },
    { id: 4, pair: 'EUR / USD', name: 'Euro to US Dollar', bid: '1.0848', ask: '1.0852', change: '-0.12%', isUp: false, category: 'Global' },
    { id: 5, pair: 'GBP / USD', name: 'British Pound to US Dollar', bid: '1.2710', ask: '1.2715', change: '+0.05%', isUp: true, category: 'Global' },
    { id: 6, pair: 'USD / JPY', name: 'US Dollar to Japanese Yen', bid: '155.35', ask: '155.42', change: '+0.42%', isUp: true, category: 'Global' },
    { id: 7, pair: 'AUD / USD', name: 'Australian Dollar to US Dollar', bid: '0.6650', ask: '0.6655', change: '-0.24%', isUp: false, category: 'Global' },
    { id: 8, pair: 'USD / CAD', name: 'US Dollar to Canadian Dollar', bid: '1.3680', ask: '1.3685', change: '-0.04%', isUp: false, category: 'Global' }
  ];

  // useState hook: tracks user's search query in the filter input
  const [searchTerm, setSearchTerm] = useState('');

  // Filter pairs based on user input
  const filteredRates = initialRatesData.filter((item) =>
    item.pair.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="rates-page-root">
      
      {/* Background Ambient React Icons Effect */}
      <div className="ambient-bg-icons" aria-hidden="true">
        <FaRupeeSign className="ambient-icon ambient-icon-1" />
        <FaDollarSign className="ambient-icon ambient-icon-2" />
        <FaEuroSign className="ambient-icon ambient-icon-3" />
        <FaPoundSign className="ambient-icon ambient-icon-4" />
      </div>

      <div className="rates-container">
        
        {/* Page Header */}
        <div className="rates-header">
          <span className="rates-pill">
            <FaTable /> Market Overview
          </span>
          <h1 className="rates-title">Forex Exchange Rates Board</h1>
          <p className="rates-subtitle">
            Comprehensive market snapshot for major currency pairs and popular NRI remittance routes.
            Values are updated with realistic simulated data.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="rates-controls">
          <div className="search-bar-wrap">
            <FaSearch className="search-icon" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by pair or currency name (e.g. INR, USD, EUR)..."
              className="rates-search-input"
            />
          </div>
          <div className="rates-timestamp">
            <FaClock /> Simulated Live Feed
          </div>
        </div>

        {/* Currency Pairs Table */}
        <div className="table-card">
          <div className="table-responsive-wrapper">
            <table className="rates-table">
              <thead>
                <tr>
                  <th>Currency Pair</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Bid (Sell)</th>
                  <th>Ask (Buy)</th>
                  <th>24h Change</th>
                </tr>
              </thead>
              <tbody>
                {filteredRates.length > 0 ? (
                  filteredRates.map((row) => (
                    <tr key={row.id} className="rate-row">
                      <td className="cell-pair">
                        <strong>{row.pair}</strong>
                      </td>
                      <td className="cell-name">{row.name}</td>
                      <td>
                        <span className={`cat-badge ${row.category === 'NRI Major' ? 'nri-cat' : 'global-cat'}`}>
                          {row.category}
                        </span>
                      </td>
                      <td className="cell-num">{row.bid}</td>
                      <td className="cell-num">{row.ask}</td>
                      <td>
                        <span className={`change-badge ${row.isUp ? 'change-positive' : 'change-negative'}`}>
                          {row.isUp ? <FaArrowUp size={11} /> : <FaArrowDown size={11} />}
                          {row.change}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="empty-table-cell">
                      No currency pairs found matching "{searchTerm}". Try another search term.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table Footer Helper Note */}
        <div className="table-footnote">
          <p>
            * <strong>Bid Price:</strong> The rate at which the market buys foreign currency. 
            * <strong>Ask Price:</strong> The rate at which the market sells foreign currency.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Rates;
