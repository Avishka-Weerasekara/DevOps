import React from "react";
import { Link } from "react-router-dom";
import "./Root.css";

function Root() {
  return (
    <div className="root-page">
      <div className="root-card">
        <h1>Welcome </h1>
        <p>Sign in or create an account to continue</p>

        <div className="root-buttons">
          <Link to="/signin" className="root-btn-primary">
            Sign In
          </Link>

          <Link to="/signup" className="root-btn-outline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Root;
