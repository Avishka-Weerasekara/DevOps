import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/signin");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome to Home Page</h2>
      {user ? (
        <>
          <p>Email: {user.email}</p>
          <p>Last Login: {new Date(user.lastLogin).toLocaleString()}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>No user logged in.</p>
      )}
    </div>
  );
}

export default Home;
