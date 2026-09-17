import React, { useState } from 'react';
// React Icons: Contact badges, envelope, and ambient icons
import { 
  FaEnvelope, 
  FaUser, 
  FaCommentDots, 
  FaPaperPlane, 
  FaRupeeSign, 
  FaDollarSign, 
  FaEuroSign, 
  FaPoundSign,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCheckCircle
} from 'react-icons/fa';
import './Contact.css';

/**
 * Contact Page Component
 * Theme: Teal (#00838f) with soft background.
 * Requirements:
 * - Basic form with Name, Email, and Message inputs controlled via `useState`.
 * - Submit button that triggers an alert on click (no backend required).
 * - Code is clearly commented for beginners.
 */
function Contact() {
  // useState hooks to manage form field values (controlled inputs)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Currency Inquiry',
    message: ''
  });

  // useState hook to show a friendly success confirmation box in addition to the alert
  const [submitted, setSubmitted] = useState(false);

  // Helper to handle text changes in any input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handles form submission on button click
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents browser from doing a default page refresh

    // Simple validation check
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill out all required fields (Name, Email, and Message).');
      return;
    }

    // Trigger browser alert as requested
    alert(
      `Thank you, ${formData.name}!\n\nYour message regarding "${formData.subject}" has been received successfully.\nSince this is an educational demo without a backend, no email was sent.`
    );

    // Show on-page confirmation message
    setSubmitted(true);

    // Reset form fields back to empty state
    setFormData({
      name: '',
      email: '',
      subject: 'Currency Inquiry',
      message: ''
    });
  };

  return (
    <div className="contact-page-root">
      
      {/* Background Ambient React Icons Effect */}
      <div className="ambient-bg-icons" aria-hidden="true">
        <FaRupeeSign className="ambient-icon ambient-icon-1" />
        <FaDollarSign className="ambient-icon ambient-icon-2" />
        <FaEuroSign className="ambient-icon ambient-icon-3" />
        <FaPoundSign className="ambient-icon ambient-icon-4" />
      </div>

      <div className="contact-container">
        
        {/* Header */}
        <div className="contact-header">
          <span className="contact-pill">
            <FaEnvelope /> Get In Touch
          </span>
          <h1 className="contact-title">Contact Our Forex Support Team</h1>
          <p className="contact-subtitle">
            Have questions about NRI remittances, currency calculation formulas, or mock rate feeds? 
            Send us a message and we will be happy to assist.
          </p>
        </div>

        <div className="contact-layout-grid">
          
          {/* Left Column: Contact Details Cards */}
          <div className="contact-info-panel">
            <h2>Let's Talk Forex</h2>
            <p className="info-desc">
              We are dedicated to helping beginners understand global currencies and NRI remittances. 
              Reach out to us through the form or using our demo contact channels.
            </p>

            <div className="info-cards-list">
              
              <div className="info-item">
                <div className="info-icon-box">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email Support</h4>
                  <p>support@forexchange-demo.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4>Toll-Free NRI Helpline</h4>
                  <p>+91 (800) 123-FOREX</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Financial Technology Hub</h4>
                  <p>Financial District, Hyderabad / Mumbai, India</p>
                </div>
              </div>

            </div>

            <div className="nri-support-badge">
              <strong>NRI Advisory Note:</strong> Always verify banking regulations and RBI guidelines 
              when performing actual high-value currency transfers to India.
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-panel">
            
            {submitted && (
              <div className="form-success-banner">
                <FaCheckCircle className="success-icon" />
                <div>
                  <strong>Message Sent Successfully!</strong>
                  <p>We've registered your message. You can submit another inquiry below if desired.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <FaUser className="label-icon" /> Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="contact-input"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <FaEnvelope className="label-icon" /> Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="contact-input"
                  required
                />
              </div>

              {/* Subject Selector */}
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Inquiry Topic
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="contact-select"
                >
                  <option value="Currency Inquiry">General Currency Inquiry</option>
                  <option value="NRI Remittance Help">NRI Remittance to India</option>
                  <option value="Exchange Rates Data">Exchange Rates Feed Question</option>
                  <option value="Feedback / Suggestions">Website Feedback</option>
                </select>
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <FaCommentDots className="label-icon" /> Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your questions or feedback here..."
                  className="contact-textarea"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="contact-submit-btn">
                Send Message <FaPaperPlane />
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;
