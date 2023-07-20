import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllFlights from "./components/AllFlights";
import HeroSection from "./components/HeroSection";
import Login from "./components/Login";
import Checkout from "./pages/Checkout";
import Register from "./components/Register";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-flights" element={<AllFlights />} />
        <Route path="/flight-search" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;
