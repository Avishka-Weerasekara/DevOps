import React, { useContext } from "react";
import "./Products.css";
import { CartContext } from "../context/CartContext";

import apple from "../assets/images/apple.jpg";
import milk from "../assets/images/milk.jpg";
import bread from "../assets/images/bread.jpg";
import juice from "../assets/images/juice.jpg";

const products = [
  { name: "Fresh Apples", price: 4.99, img: apple },
  { name: "Milk Pack", price: 2.49, img: milk },
  { name: "Bread", price: 1.99, img: bread },
  { name: "Orange Juice", price: 3.49, img: juice },
];

function Products() {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="products">
      <h2>Featured Products</h2>

      <div className="product-grid">
        {products.map((p, i) => (
          <div key={i} className="product-card">
            <img src={p.img} alt={p.name} />

            <div className="product-overlay">
              <h4>{p.name}</h4>
              <span>${p.price}</span>

              <button onClick={() => addToCart(p)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
