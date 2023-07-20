import React, { useState } from "react";
import "../Utils.css";
import "../Style.css";
import { useDispatch } from "react-redux";
import { fromToSetInRedux } from "./SearchedData";

const HeroSection = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnBack, setReturnBack] = useState("");

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fromToSetInRedux({ from: from, to: to }));
  };

  return (
    <div>
      <div className="dd--flex--center hero-main-container">
        <div className="dd--flex--center dd--justify--space-evenly dd--flex-direction--column dd--border-radius--8px hero-container">
          <h3 className="dd--letter-spacing--1px hero-heading">
            Let the journey begin
          </h3>

          <div className="dd--flex--center search-flights">
            <div className="dd--border-radius--6px input-container">
              <label className="hero-label" htmlFor="from">
                From
              </label>
              <input
                className="dd--outline--none hero-input"
                type="text"
                value={from}
                name=""
                id="from"
                placeholder="Delhi"
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>

            <div className="dd--border-radius--6px input-container">
              <label className="hero-label" htmlFor="to">
                To
              </label>
              <input
                className="hero-input"
                type="text"
                value={to}
                name=""
                id="to"
                placeholder="Mumbai"
                onChange={(e) => setTo(e.target.value)}
              />
            </div>

            <div className="dd--border-radius--6px input-container">
              <label className="hero-label" htmlFor="departure">
                Departure
              </label>
              <input
                className="hero-input"
                type="date"
                value={departure}
                name=""
                id="departure"
                placeholder="01/07/2023"
                onChange={(e) => setDeparture(e.target.value)}
              />
            </div>

            <div className="dd--border-radius--6px input-container">
              <label className="hero-label" htmlFor="return">
                Return
              </label>
              <input
                className="hero-input"
                type="date"
                value={returnBack}
                name=""
                id="return"
                onChange={(e) => setReturnBack(e.target.value)}
              />
            </div>
          </div>
          <button
            className="dd--border-radius--6px dd--cursor--pointer hero-button"
            type="submit"
            id="button"
            onClick={handleSearch}
          >
            SEARCH FLIGHTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
