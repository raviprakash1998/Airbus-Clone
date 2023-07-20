import React, { useEffect } from "react";
import "../Utils.css";
import "../Style.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Checkout = () => {
  const price = useSelector((state) => state.search.price);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("email")) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <div className="dd--main--container--100vh dd--grid--center dd--grid--2--cols">
        <div className="fare-summary-container dd--border-radius--10px dd--flex-direction--column dd-checkout-same-container">
          <h3 className="head-color checkout-card-heading">Fare Summary</h3>
          <div className="dd--flex--center dd--justify--space-between fare-items">
            <span className="fare-name">Base Fare</span>
            <span className="dd--text-align--center fare-amount">${price}</span>
          </div>
          <div className="dd--flex--center dd--justify--space-between fare-items">
            <span className="fare-name">Fee & Surcharges</span>
            <span className="dd--text-align--center fare-amount">
              ${price * 0.1}
            </span>
          </div>
          <div className="dd--flex--center dd--justify--space-between fare-items">
            <span className="fare-name">Total Amount</span>
            <span className="dd--text-align--center fare-amount">
              ${Number(price) + Number(price * 0.1)}
            </span>
          </div>
        </div>
        <div className="payment-container dd--border-radius--10px dd--flex-direction--column dd-checkout-same-container">
          <h3 className="dd--text-align--center head-color checkout-card-heading">
            Payment Method
          </h3>
          <label className="label" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            className="name dd--outline--none dd--border-radius--10px"
            id="name"
            placeholder="Name on card"
          />
          <label className="label" htmlFor="card">
            Card Number:
          </label>
          <input
            type="number"
            className="payment-card dd--outline--none dd--border-radius--10px"
            id="card"
            placeholder="1111-2222-3333-4444"
          />
          <label className="label" htmlFor="exp-card">
            Expiry Date:
          </label>
          <div id="exp-card">
            <select className="expiry-date dd--outline--none dd--border-radius--10px">
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
            /
            <select className="expiry-date dd--outline--none dd--border-radius--10px">
              <option>2015</option>
              <option>2016</option>
              <option>2017</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
            </select>
          </div>

          <label className="label" htmlFor="cvv">
            CVV:
          </label>
          <input
            type="number"
            className="cvv dd--outline--none dd--border-radius--10px"
            id="cvv"
            placeholder="CVV"
            min="100"
            max="999"
          />

          <button
            className="button dd--cursor--pointer dd--outline--none dd--border-radius--10px"
            type="submit"
          >
            Pay
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;