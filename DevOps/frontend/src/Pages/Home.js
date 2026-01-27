import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    
      <div>
        <Navbar />
        <Footer />
      </div>
  );
}

export default Home;
