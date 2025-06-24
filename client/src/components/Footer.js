// import React from 'react';
// import "../styles/Footer.css";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/X";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

// function Footer () {
//     return(
//         <div className="footer">
//             <div className="socialMedia">
//                 <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
//             </div>
//             <p>&copy; 2025 fleamarket.com</p>
//         </div>
//     );
// }

// export default Footer;

import React  from "react";

function Footer(){
    return (
        
        <footer 
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "15px",
          marginTop: "auto"
        }}
      >
        <div 
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px"
          }}
        >
          {/* Company Info */}
          <div>
            <h2 style={{ marginBottom: "1rem", color: "#ecf0f1" }}>🛒 Strathmore Marketplace</h2>
            <p style={{ lineHeight: "1.6", color: "#bdc3c7" }}>
              Connecting buyers and sellers across Kenya. Discover unique products 
              from local vendors and support your community.
            </p>
            <div style={{ marginTop: "1rem" }}>
              <span style={{ color: "#3498db", fontSize: "1.1rem" }}>Proudly a Stratizen</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ marginBottom: "1rem", color: "#ecf0f1" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
              <li><a href="#" style={{ color: "#bdc3c7", textDecoration: "none" }}>About Us</a></li>
              <li><a href="#" style={{ color: "#bdc3c7", textDecoration: "none" }}>How It Works</a></li>
              <li><a href="#" style={{ color: "#bdc3c7", textDecoration: "none" }}>Vendor Guidelines</a></li>
              <li><a href="#" style={{ color: "#bdc3c7", textDecoration: "none" }}>Terms of Service</a></li>
              <li><a href="#" style={{ color: "#bdc3c7", textDecoration: "none" }}>Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ marginBottom: "1rem", color: "#ecf0f1" }}>Contact Us</h4>
            <div style={{ lineHeight: "2", color: "#bdc3c7" }}>
              <p>📧 info@strathmarketplace.co.ke</p>
              <p>📱 +254 769 422 980</p>
              <p>📍 Nairobi, Kenya</p>
              <p>🕐 Mon - Fri: 8AM - 6PM</p>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <h5 style={{ color: "#ecf0f1", marginBottom: "0.5rem" }}>Follow Us</h5>
              <div style={{ display: "flex", gap: "1rem" }}>
                <span style={{ cursor: "pointer", fontSize: "1.2rem" }}>📘</span>
                <span style={{ cursor: "pointer", fontSize: "1.2rem" }}>📸</span>
                <span style={{ cursor: "pointer", fontSize: "1.2rem" }}>🐦</span>
                <span style={{ cursor: "pointer", fontSize: "1.2rem" }}>💼</span>
              </div>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 style={{ marginBottom: "1rem", color: "#ecf0f1" }}>Customer Support</h4>
            <div style={{ lineHeight: "2", color: "#bdc3c7" }}>
              <p>💬 Live Chat Available</p>
              <p>❓ Help Center</p>
              <p>🎧 24/7 Support</p>
              <p>💳 Secure Payments</p>
            </div>
            <button 
              style={{
                marginTop: "1rem",
                padding: "0.7rem 1.5rem",
                backgroundColor: "#e74c3c",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Get Help
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div 
          style={{
            borderTop: "1px solid #34495e",
            marginTop: "2rem",
            paddingTop: "1rem",
            textAlign: "center",
            color: "#95a5a6"
          }}
        >
          <p>© 2025 Strathmore Marketplace. All rights reserved. | Made with ❤️ in Strathmore</p>
        </div>
      </footer>
        
    );
}

export default Footer;