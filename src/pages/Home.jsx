import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AllFlights from "../components/AllFlights";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AllFlights />
      <Footer />
    </>
  );
};

export default Home;
