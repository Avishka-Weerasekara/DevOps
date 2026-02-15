import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import heroImg from "../assets/images/hero.jpg";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            Fresh Groceries <br /> Delivered to You 123
          </h1>
          <p>Daily essentials, fresh food & more at LOOM</p>

          <button
            className="hero-btn"
            onClick={() => navigate("/products")}
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
