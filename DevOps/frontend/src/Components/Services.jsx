import React from "react";
import "./Services.css";

const services = [
  {
    icon: "🚚",
    title: "Fast Delivery",
    desc: "Get groceries delivered within hours",
  },
  {
    icon: "🥬",
    title: "Fresh Products",
    desc: "Handpicked fresh & quality items",
  },
  {
    icon: "💳",
    title: "Secure Payments",
    desc: "100% safe & encrypted transactions",
  },
  {
    icon: "📞",
    title: "24/7 Support",
    desc: "We’re here whenever you need us",
  },
];

function Services() {
  return (
    <section className="services-section">
      <h2>Why Shop With LOOM?</h2>

      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <div className="service-icon">{s.icon}</div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
