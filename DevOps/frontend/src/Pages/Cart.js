import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Cart() {
  return (
    <>
      <Navbar />

      <div className="page-container">
        <h2>Your Cart</h2>
        <p>Your cart is currently empty.</p>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
