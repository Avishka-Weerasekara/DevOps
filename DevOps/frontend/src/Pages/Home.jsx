import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Categories from "../Components/Categories";
import Products from "../Components/Products";
import PromoBanner from "../Components/PromoBanner";
import Services from "../Components/Services";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <PromoBanner />
      <Services />
      <Footer />
    </>
  );
}

export default Home;
