import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // ✅ Reuse same style

function About() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">DevOps App</div>
        <div className="nav-links">
          <button onClick={() => navigate("/home")}>Home</button>
          <button onClick={() => navigate("/about")}>About</button>
          <button onClick={() => navigate("/contact")}>Contact</button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="home-content">
        <h2>About This Project</h2>
        <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto" }}>
          {" "}
          <strong>React</strong>, <strong>Express</strong>, and{" "}
          <strong>MongoDB</strong>, containerized with <strong>Docker</strong>.
          <br />
            This project demonstrates a full-stack web application with user.
        </p>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Built by Avishka</p>
      </footer>
    </div>
  );
}

export default About;
