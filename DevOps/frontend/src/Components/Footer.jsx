import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>LOOM</h2>
          <p>Weaving ideas into digital reality.</p>
        </div>

        {/* Internal Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/profile">Profile</Link>
        </div>

        {/* External Links */}
        <div className="footer-social">
          <h4>Connect</h4>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} LOOM. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
