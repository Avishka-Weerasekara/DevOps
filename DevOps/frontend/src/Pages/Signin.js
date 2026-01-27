import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signin.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL;

  const handleSignin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(`${API_URL}/api/users/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Invalid email or password");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/home");
    } catch (error) {
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        <h2>Welcome Back</h2>

        <form onSubmit={handleSignin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="signin-btn-group">
            <button type="submit" className="signin-btn-primary">
              Sign In
            </button>

            <Link to="/signup">
              <button type="button" className="signin-btn-outline">
                Go to Sign Up
              </button>
            </Link>
          </div>
        </form>

        {message && <p className="signin-message">{message}</p>}
      </div>
    </div>
  );
}

export default Signin;
