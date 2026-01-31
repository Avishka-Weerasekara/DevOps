import React from "react";
import "./PromoBanner.css";

function PromoBanner() {
  return (
    <section className="promo-banner">
      <div className="promo-left">
        <span className="promo-badge">WEEKLY DEAL</span>
        <h2>
          Save Up To <span>40%</span> <br />
          On Fresh Groceries
        </h2>
        <p>
          Stock up on fruits, vegetables, dairy & essentials.
          Limited-time offers only at LOOM.
        </p>
        <button className="promo-btn">Shop Deals</button>
      </div>

      <div className="promo-right">
        <div className="promo-circle" />
      </div>
    </section>
  );
}

export default PromoBanner;
