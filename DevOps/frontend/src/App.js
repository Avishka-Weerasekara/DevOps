import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Root from "./Pages/Root";
import Home from "./Pages/Home";
import About from "./Pages/About";     // ✅ Add
import Contact from "./Pages/Contact"; // ✅ Add
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Root/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />      {/* ✅ New Route */}
        <Route path="/contact" element={<Contact />} />  {/* ✅ New Route */}
      </Routes>
    </Router>
  );
}

export default App;
