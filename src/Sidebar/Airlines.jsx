import React from "react";
import "./Sidebar.css";
import AirlineSelected from "../components/AirlineSelected";

const Airlines = () => {
  return (
    <div className="sidebar-items">
      <h2 className="sidebar-title">Airlines</h2>
      <AirlineSelected />
      <AirlineSelected />
      <AirlineSelected />
      <AirlineSelected />
    </div>
  );
};

export default Airlines;
