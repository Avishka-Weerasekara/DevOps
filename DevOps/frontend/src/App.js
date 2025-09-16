import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/"
          element={
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h1>Welcome</h1>
              <p>
                <a href="/signup">Sign Up</a> | <a href="/signin">Sign In</a>
              </p>
            </div>
          }
        />
      </Routes>
      
    </Router>
  );
}

export default App;
