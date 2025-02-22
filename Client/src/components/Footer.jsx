import React from "react";
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>FundMe</h2>
        </div>
        
        {/* Navigation Links */}
        <ul className="footer-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">Campaigns</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>

        {/* Copyright Section */}
        <p className="footer-text">
          © 2025 FundRaiser. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
