import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="page-container">
        <h2>Contact Us</h2>
        <p>Email: support@ecommerce.com</p>
        <p>Phone: +94 77 123 4567</p>
        <p>Address: Colombo, Sri Lanka</p>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
