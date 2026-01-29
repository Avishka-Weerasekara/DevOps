import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} E-Commerce Platform</p>

        <p className="footer-sub">
          Built • Version #{process.env.REACT_APP_BUILD_VERSION}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
