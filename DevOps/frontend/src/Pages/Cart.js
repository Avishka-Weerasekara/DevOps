import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Navbar />

      <div className="cart-page">
        <div className="cart-container">
          <h2>Your Cart</h2>

          {cartItems.length === 0 ? (
            <p className="empty">Your cart is empty 🛒</p>
          ) : (
            <>
              <div className="cart-list">
                {cartItems.map((item, i) => (
                  <div key={i} className="cart-item">
                    <img src={item.img} alt={item.name} />

                    <div className="cart-info">
                      <h4>{item.name}</h4>
                      <p>${item.price.toFixed(2)}</p>
                    </div>

                    <button onClick={() => removeFromCart(i)}>
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-total">
                <h3>Total: ${total.toFixed(2)}</h3>
                <button className="checkout-btn">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
