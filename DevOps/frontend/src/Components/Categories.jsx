import React from "react";
import "./Categories.css";
import fruits from "../assets/images/fruits.jpg";
import vegetables from "../assets/images/vegetables.jpg";
import beverages from "../assets/images/beverages.jpg";
import bakery from "../assets/images/bakery.jpg";

const categories = [
  { name: "Fruits", img: fruits },
  { name: "Vegetables", img: vegetables },
  { name: "Beverages", img: beverages },
  { name: "Bakery", img: bakery },
];

function Categories() {
  return (
    <section className="categories">
      <h2>Shop by Category</h2>

      <div className="category-grid">
        {categories.map((cat, i) => (
          <div key={i} className="category-card">
            <img src={cat.img} alt={cat.name} />
            <span>{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
