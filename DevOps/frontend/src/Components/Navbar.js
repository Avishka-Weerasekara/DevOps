import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/signin");
  };

  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => navigate("/home")}>
        LOOM
      </div>

      <div className="nav-links">
        <button onClick={() => navigate("/home")}>Home</button>
        <button onClick={() => navigate("/products")}>Product</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
        <button onClick={() => navigate("/cart")}>Cart</button>
        <button onClick={() => navigate("/profile")}>Profile</button>

        {user && (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
