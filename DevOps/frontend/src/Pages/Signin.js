import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // ✅ Backend API URL from .env
  const API_URL = process.env.REACT_APP_API_URL;

  const handleSignin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(`${API_URL}/api/users/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Invalid email or password");
        return;
      }

      // ✅ Save user info
      localStorage.setItem("user", JSON.stringify(data.user));

      setMessage("Login successful");
      navigate("/home");
    } catch (error) {
      console.error("Signin error:", error);
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Sign In</h2>

      <form onSubmit={handleSignin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Sign In</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Signin;
