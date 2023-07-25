import React, { useState, useEffect } from "react";
import "../Utils.css";
import "../Style.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { flightPrice } from "./SearchedData";
import { toast } from "react-toastify";

const AllFlights = () => {
  const [allFlights, setAllFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notAvailable, setNotAvailable] = useState(false);

  const allSearchedState = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getAvailableFlights = async (from, to) => {
    setLoading(true);

    const searchURL = await fetch(
      `https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights?from=${from}&to=${to}`
    );
    const response = await searchURL.json();
    if (response.length === 0) {
      setNotAvailable(true);
    } else {
      setLoading(false);
      setNotAvailable(false);
      setAllFlights(response);
    }
  };

  useEffect(() => {
    if (allSearchedState.from && allSearchedState.to) {
      const from =
        allSearchedState.from.charAt(0).toUpperCase() +
        allSearchedState.from.slice(1);
      const to =
        allSearchedState.to.charAt(0).toUpperCase() +
        allSearchedState.to.slice(1);
      getAvailableFlights(from, to);
    } else {
      getAllFlights();
    }
  }, [allSearchedState.from, allSearchedState.to]);

  const getAllFlights = async () => {
    setLoading(true);
    const res = await fetch(
      "https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights"
    );
    const data = await res.json();
    setLoading(false);
    setAllFlights(data);
  };

  useEffect(() => {
    getAllFlights();
  }, []);

  const bookFlight = (price) => {
    dispatch(flightPrice(price));

    navigate("/checkout");
  };

  return (
    <div className="flights-container">
      <div className="all-flights-container">
        {notAvailable ? (
          <h1>Flights are not available</h1>
        ) : loading ? (
          <h1 className="loading">Loading...</h1>
        ) : (
          allFlights.map((flight) => {
            return (
              <div
                className="dd--flex--center dd--text-align--center dd--border-radius--10px flight-container"
                key={uuidv4()}
              >
                <div className="flight-airline-name dd--flex--center dd--justify--space-evenly dd-flight-common">
                  {flight.airlineName}
                </div>
                <div className="dd--flex-direction--column flight-time dd--flex--center dd--justify--space-evenly dd-flight-common">
                  <div className="flight-from">{flight.from}</div>
                  <div className="flight-departure-date">
                    {flight.departure.departureDate}
                  </div>
                  <div className="flight-departure-time">
                    {flight.departure.departureTime}
                  </div>
                </div>

                <div className="flight-duration dd--flex--center dd--justify--space-evenly dd-flight-common">
                  {flight.duration}
                </div>

                <div className="dd--flex-direction--column flight-time dd--flex--center dd--justify--space-evenly dd-flight-common">
                  <div className="flight-to">{flight.to}</div>
                  <div className="flight-return-date">
                    {flight.return.returnDate}
                  </div>
                  <div className="flight-return-time">
                    {flight.return.returnTime}
                  </div>
                </div>

                <div className="flight-via dd--flex--center dd--justify--space-evenly dd-flight-common">
                  {flight.via[0]}
                </div>

                <div className="flight-price dd--flex--center dd--justify--space-evenly dd-flight-common">
                  ${flight.price}
                </div>

                <button
                  className="dd--border-radius--10px dd--cursor--pointer flight-button"
                  onClick={() => bookFlight(flight.price)}
                >
                  BOOK NOW
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AllFlights;
