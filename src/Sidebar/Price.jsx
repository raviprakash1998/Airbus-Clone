import React from "react";
import "./Sidebar.css";
import PriceSelected from "../components/PriceSelected";

const Price = () => {
  return (
    <div className="sidebar-items">
      <h2 className="sidebar-title">Price</h2>

      <PriceSelected />
      <PriceSelected />
      <PriceSelected />
      <PriceSelected />
    </div>
  );
};

export default Price;
