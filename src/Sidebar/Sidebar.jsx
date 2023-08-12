import React from "react";
import Airlines from "./Airlines";
import Price from "./Price";
import "./../Utils.css";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <section className="sidebar">
        <div className="sidebar-heading">Filters</div>
        <span className="span"></span>
        <Airlines />
        <Price />
      </section>
    </>
  );
};

export default Sidebar;
