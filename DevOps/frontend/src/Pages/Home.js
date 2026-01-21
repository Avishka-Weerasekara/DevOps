import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/signin");
  };

  return (
    <div className="home-container">
      {/* ✅ Navbar */}
      <nav className="navbar">
        <div className="nav-logo">DevOps App</div>
        <div className="nav-links">
          <button onClick={() => navigate("/home")}>Home</button>
          <button onClick={() => navigate("/about")}>About</button>
          <button onClick={() => navigate("/contact")}>Contact</button>
          {user && <button onClick={handleLogout}>Logout</button>}
        </div>
      </nav>

      {/* ✅ Main content */}
      <main className="home-content">
        <h2>Welcome to Home Page</h2>
        {user ? (
          <div className="user-card">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Last Login:</strong> {new Date(user.lastLogin).toLocaleString()}</p>
          </div>
        ) : (
          <p>No user logged in.</p>
        )}
      </main>

      {/* ✅ Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} E Commerce </p>
      </footer>
    </div>
  );
}

export default Home;
