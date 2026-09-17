import React, { useState } from 'react';
// React Icons: Calculator, swap arrows, and background watermarks
import { 
  FaExchangeAlt, 
  FaCalculator, 
  FaRupeeSign, 
  FaDollarSign, 
  FaEuroSign, 
  FaPoundSign, 
  FaYenSign,
  FaCheckCircle,
  FaInfoCircle,
  FaPaperPlane
} from 'react-icons/fa';
import './Converter.css';

/**
 * Currency Converter Page
 * Color Theme: Green (#2e7d32) accents on a clean light background.
 * Specially tailored for Indian Rupee (INR) and NRI money transfers / currency conversion.
 */
function Converter() {
  // 1. Hardcoded sample exchange rates relative to 1 USD
  const exchangeRates = {
    USD: 1.0,
    EUR: 0.92,
    INR: 83.50, // 1 USD = 83.50 INR
    GBP: 0.79,
    JPY: 155.20
  };

  // Currency metadata with symbols and descriptions
  const currencyInfo = {
    USD: { name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
    EUR: { name: 'Euro', symbol: '€', flag: '🇪🇺' },
    INR: { name: 'Indian Rupee (NRI Base)', symbol: '₹', flag: '🇮🇳' },
    GBP: { name: 'British Pound', symbol: '£', flag: '🇬🇧' },
    JPY: { name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵' }
  };

  // 2. React State (useState Hooks)
  // Default values set to a common NRI remittance case: 1000 USD to INR
  const [amount, setAmount] = useState('1000');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');

  // Stores the calculated result
  const [conversionResult, setConversionResult] = useState({
    amount: '1000',
    from: 'USD',
    to: 'INR',
    convertedTotal: (1000 * (83.50 / 1.0)).toFixed(2),
    ratePerUnit: (83.50 / 1.0).toFixed(4)
  });

  // 3. Conversion calculation logic
  const handleConvert = (e) => {
    if (e) e.preventDefault(); // Prevents page reload if inside a form

    const numericAmount = parseFloat(amount);

    // Validation: make sure user typed a valid positive number
    if (isNaN(numericAmount) || numericAmount <= 0) {
      alert('Please enter a valid amount greater than 0.');
      return;
    }

    // Formula: (Amount in USD) * Target Currency Rate
    // Convert 'from' currency to USD base, then to 'to' currency
    const amountInUSD = numericAmount / exchangeRates[fromCurrency];
    const finalConverted = amountInUSD * exchangeRates[toCurrency];
    const unitRate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];

    setConversionResult({
      amount: numericAmount.toLocaleString(),
      from: fromCurrency,
      to: toCurrency,
      convertedTotal: finalConverted.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }),
      ratePerUnit: unitRate.toFixed(4)
    });
  };

  // 4. Swap currencies handler (e.g. USD -> INR becomes INR -> USD)
  const handleSwapCurrencies = () => {
    const prevFrom = fromCurrency;
    const prevTo = toCurrency;
    setFromCurrency(prevTo);
    setToCurrency(prevFrom);

    // Trigger instant conversion for the newly swapped direction
    const numericAmount = parseFloat(amount);
    if (!isNaN(numericAmount) && numericAmount > 0) {
      const amountInUSD = numericAmount / exchangeRates[prevTo];
      const finalConverted = amountInUSD * exchangeRates[prevFrom];
      const unitRate = exchangeRates[prevFrom] / exchangeRates[prevTo];

      setConversionResult({
        amount: numericAmount.toLocaleString(),
        from: prevTo,
        to: prevFrom,
        convertedTotal: finalConverted.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }),
        ratePerUnit: unitRate.toFixed(4)
      });
    }
  };

  // 5. Preset button click for fast NRI conversions
  const handleQuickNRIPreset = (fromCurr, toCurr) => {
    setFromCurrency(fromCurr);
    setToCurrency(toCurr);
    
    const numericAmount = parseFloat(amount) || 1000;
    const amountInUSD = numericAmount / exchangeRates[fromCurr];
    const finalConverted = amountInUSD * exchangeRates[toCurr];
    const unitRate = exchangeRates[toCurr] / exchangeRates[fromCurr];

    setConversionResult({
      amount: numericAmount.toLocaleString(),
      from: fromCurr,
      to: toCurr,
      convertedTotal: finalConverted.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }),
      ratePerUnit: unitRate.toFixed(4)
    });
  };

  return (
    <div className="converter-page-root">
      
      {/* Background Ambient React Icons Effect */}
      <div className="ambient-bg-icons" aria-hidden="true">
        <FaRupeeSign className="ambient-icon ambient-icon-1" />
        <FaDollarSign className="ambient-icon ambient-icon-2" />
        <FaEuroSign className="ambient-icon ambient-icon-3" />
        <FaPoundSign className="ambient-icon ambient-icon-4" />
      </div>

      <div className="converter-container">
        
        {/* Header Section */}
        <div className="converter-header">
          <span className="converter-pill">
            <FaCalculator /> Currency &amp; NRI Remittance Engine
          </span>
          <h1 className="converter-title">Convert Global Currencies to INR &amp; More</h1>
          <p className="converter-subtitle">
            Reliable, transparent exchange calculations. Choose your currencies, type an amount, 
            and see accurate conversions instantly.
          </p>
        </div>

        {/* Quick NRI Preset Buttons */}
        <div className="nri-preset-strip">
          <span className="preset-label">
            <FaPaperPlane /> Popular NRI Inward Transfers:
          </span>
          <div className="preset-btns">
            <button 
              type="button"
              className={`preset-chip ${fromCurrency === 'USD' && toCurrency === 'INR' ? 'active-chip' : ''}`}
              onClick={() => handleQuickNRIPreset('USD', 'INR')}
            >
              🇺🇸 USD → 🇮🇳 INR
            </button>
            <button 
              type="button"
              className={`preset-chip ${fromCurrency === 'GBP' && toCurrency === 'INR' ? 'active-chip' : ''}`}
              onClick={() => handleQuickNRIPreset('GBP', 'INR')}
            >
              🇬🇧 GBP → 🇮🇳 INR
            </button>
            <button 
              type="button"
              className={`preset-chip ${fromCurrency === 'EUR' && toCurrency === 'INR' ? 'active-chip' : ''}`}
              onClick={() => handleQuickNRIPreset('EUR', 'INR')}
            >
              🇪🇺 EUR → 🇮🇳 INR
            </button>
            <button 
              type="button"
              className={`preset-chip ${fromCurrency === 'JPY' && toCurrency === 'INR' ? 'active-chip' : ''}`}
              onClick={() => handleQuickNRIPreset('JPY', 'INR')}
            >
              🇯🇵 JPY → 🇮🇳 INR
            </button>
          </div>
        </div>

        {/* Interactive Converter Card */}
        <div className="converter-card">
          <form onSubmit={handleConvert} className="converter-form">
            
            <div className="converter-grid">
              
              {/* Amount Input */}
              <div className="form-group amount-group">
                <label htmlFor="amountInput" className="form-label">
                  Amount
                </label>
                <div className="input-with-symbol">
                  <span className="input-curr-symbol">
                    {currencyInfo[fromCurrency]?.symbol || '$'}
                  </span>
                  <input
                    id="amountInput"
                    type="number"
                    min="1"
                    step="any"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              {/* From Currency Dropdown */}
              <div className="form-group">
                <label htmlFor="fromCurrency" className="form-label">
                  From Currency
                </label>
                <select
                  id="fromCurrency"
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="form-select"
                >
                  {Object.keys(exchangeRates).map((currCode) => (
                    <option key={currCode} value={currCode}>
                      {currencyInfo[currCode].flag} {currCode} - {currencyInfo[currCode].name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Swap Button */}
              <div className="swap-button-col">
                <button
                  type="button"
                  onClick={handleSwapCurrencies}
                  className="swap-btn"
                  title="Swap currencies"
                  aria-label="Swap from and to currencies"
                >
                  <FaExchangeAlt />
                </button>
              </div>

              {/* To Currency Dropdown */}
              <div className="form-group">
                <label htmlFor="toCurrency" className="form-label">
                  To Currency
                </label>
                <select
                  id="toCurrency"
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="form-select"
                >
                  {Object.keys(exchangeRates).map((currCode) => (
                    <option key={currCode} value={currCode}>
                      {currencyInfo[currCode].flag} {currCode} - {currencyInfo[currCode].name}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Convert Action Button */}
            <div className="convert-action-wrap">
              <button type="submit" className="convert-submit-btn">
                Convert Now <FaExchangeAlt />
              </button>
            </div>

          </form>

          {/* Converted Result Display Box */}
          {conversionResult && (
            <div className="result-display-box">
              <div className="result-header">
                <span className="result-tag">
                  <FaCheckCircle /> Converted Total
                </span>
                <span className="rate-ratio">
                  1 {conversionResult.from} = {conversionResult.ratePerUnit} {conversionResult.to}
                </span>
              </div>

              <div className="result-amount-row">
                <span className="source-summary">
                  {currencyInfo[conversionResult.from]?.symbol}{conversionResult.amount} {conversionResult.from} =
                </span>
                <span className="final-total">
                  {currencyInfo[conversionResult.to]?.symbol}{conversionResult.convertedTotal}
                  <span className="final-curr-code"> {conversionResult.to}</span>
                </span>
              </div>

              {/* Helpful NRI breakdown badge if converted to INR */}
              {conversionResult.to === 'INR' && (
                <div className="nri-notice-box">
                  <FaInfoCircle className="notice-icon" />
                  <span>
                    <strong>NRI Remittance Insight:</strong> When sending {conversionResult.amount} {conversionResult.from} to an NRE/NRO savings account in India, you would receive approximately <strong>₹{conversionResult.convertedTotal} INR</strong>.
                  </span>
                </div>
              )}

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default Converter;
