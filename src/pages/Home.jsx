import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AllFlights from "../components/AllFlights";
import Footer from "./Footer";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Sidebar />
      <AllFlights />
      <Footer />
    </>
  );
};

export default Home;
