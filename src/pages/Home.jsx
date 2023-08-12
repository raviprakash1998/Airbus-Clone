import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AllFlights from "../components/AllFlights";
import Footer from "./Footer";
import Sidebar from "../Sidebar/Sidebar";
import { useSelector } from "react-redux";

const Home = () => {
  const [selectedAirline, setSelectedAirline] = useState(null);
  const [query, setQuery] = useState("");

  const allSearchedState = useSelector((state) => state.search);

  const handleChange = (e) => {
    setSelectedAirline(e.target.value);
  };

  // function filteredData(allSearchedState, selected, query) {
  //   let filterData = allSearchedState.
  // }

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
