import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Root from "./Pages/Root";
import Home from "./Pages/Home";
import About from "./Pages/About";     // ✅ Add
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile"; // ✅ Add
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Root/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />  {/* ✅ New Route */}
      </Routes>
    </Router>
  );
}

export default App;
