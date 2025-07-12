/**
 * Footer component for the Strathmore Marketplace application.
 * Displays company info, quick links, contact info, social icons, and customer support.
 *
 * @component
 * @returns {JSX.Element} The rendered footer section.
 */
import React  from "react";
import { Link, useNavigate } from "react-router";
import "../styles/Footer.css";

function Footer(){
    return (
        
        <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h2>🛒 Strathmore Marketplace</h2>
          <p>
            Connecting buyers and sellers across Kenya. Discover unique products
            from local vendors and support your community.
          </p>
          <span className="highlight">Proudly a Stratizen</span>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Vendor Guidelines</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>📧 info@strathmarketplace.co.ke</p>
          <p>📱 +254 769 422 980</p>
          <p>📍 Nairobi, Kenya</p>
          <p>🕐 Mon - Fri: 8AM - 6PM</p>

          <h5>Follow Us</h5>
          <div className="social-icons">
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
            <span>💼</span>
          </div>
        </div>

        {/* Customer Support */}
        <div className="footer-section">
          <h4>Customer Support</h4>
          <p>💬 Live Chat Available</p>
          <p>❓ Help Center</p>
          <p>🎧 24/7 Support</p>
          <p>💳 Secure Payments</p>
          <Link to="/contact">
            <button className="get-help-btn">Get Help</button>
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Strathmore Marketplace. All rights reserved. | Made with ❤️ in Strathmore</p>
      </div>
    </footer>
        
    );
}

export default Footer;