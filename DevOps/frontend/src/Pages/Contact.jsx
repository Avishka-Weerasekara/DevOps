import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="contact-page">
        <div className="contact-card">
          <h2>Contact Us</h2>
          <p className="contact-subtitle">
            Have a question or want to work with LOOM?  
            Drop us a message.
          </p>

          <form className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              required
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit" className="btn primary">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
