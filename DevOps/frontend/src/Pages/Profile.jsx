import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Profile.css";

function Profile() {
  const user = {
    name: "Avishka Weerasekara",
    role: "Computer Engineering Undergraduate",
    email: "avishka@email.com",
    location: "Sri Lanka",
  };

  return (
    <>
      <Navbar />

      <div className="profile-page">
        <div className="profile-card">
          <div className="profile-avatar">
            <span>A</span>
          </div>

          <h2 className="profile-name">{user.name}</h2>
          <p className="profile-role">{user.role}</p>

          <div className="profile-info">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Location:</strong> {user.location}</p>
          </div>

          <div className="profile-actions">
            <button className="btn primary">Edit Profile</button>
            <button className="btn secondary">Logout</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;
