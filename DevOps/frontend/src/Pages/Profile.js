import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar />

      <div className="page-container">
        <h2>My Profile</h2>

        {user ? (
          <>
            <p><strong>Email:</strong> {user.email}</p>
            <p>
              <strong>Last Login:</strong>{" "}
              {new Date(user.lastLogin).toLocaleString()}
            </p>
          </>
        ) : (
          <p>No user data available.</p>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Profile;
