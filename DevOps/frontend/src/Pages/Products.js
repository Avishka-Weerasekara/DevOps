import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Products() {
  return (
    <>
      <Navbar />

      <div className="page-container">
        <h2>Products</h2>
        <p>Explore our latest products.</p>

        <ul>
          <li>Laptop</li>
          <li>Smartphone</li>
          <li>Headphones</li>
          <li>Smart Watch</li>
        </ul>
      </div>

      <Footer />
    </>
  );
}

export default Products;
