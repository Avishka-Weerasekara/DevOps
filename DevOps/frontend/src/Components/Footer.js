import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} E-Commerce Platform</p>
        <p className="footer-sub">
          Built with ❤️ using React
        </p>
      </div>
    </footer>
  );
}

export default Footer;
