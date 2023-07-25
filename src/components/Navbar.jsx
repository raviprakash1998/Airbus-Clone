import React, { useEffect, useState } from "react";
import "../Utils.css";
import "../Style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { UserLogin } from "./SearchedData";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Navbar = (props) => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  const login = useSelector((state) => state.search.isUserLogin);

  const navigate = useNavigate();

  const handleOpen = () => {
    navigate("/login");
  };
  const handleClick = () => {
    navigate("/");
  };
  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(UserLogin(false));

      toast.success("Logout successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);
  return (
    <>
      <div className="dd--flex--center dd--justify--space-between nav-container">
        <div className="nav-logo" onClick={handleClick}>
          <img src="./logo.png" alt="Logo-Image" className="logo-image" />
          <span className="logo-heading">Airbus</span>
        </div>
        {/* <div className="nav-items">
          <ul className="dd--list-style--none nav-ul-items">
            <li className="nav-li-items">
              <Link
                className="dd--text-decoration--none dd--font-weight--700 nav-li-item head-color"
                to={`/`}
              >
                Home
              </Link>
            </li>
            <li className="nav-li-items">
              <Link
                className="dd--text-decoration--none dd--font-weight--700 nav-li-item head-color"
                to={`/all-flights`}
              >
                Flights
              </Link>
            </li>
            <li className="nav-li-items">
              <Link
                className="dd--text-decoration--none dd--font-weight--700 nav-li-item head-color"
                to={`/flight-search`}
              >
                Search
              </Link>
            </li>
            <li className="nav-li-items">
              <Link
                className="dd--text-decoration--none dd--font-weight--700 nav-li-item head-color"
                to={`/about-us`}
              >
                About
              </Link>
            </li>
            <li className="nav-li-items">
              <Link
                className="dd--text-decoration--none dd--font-weight--700 nav-li-item head-color"
                to="/contact-us"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div> */}
        {login ? (
          <button
            className="dd--text-decoration--none dd--font-weight--700 dd--color--white dd--border-radius--8px dd--cursor--pointer login-button"
            color="inherit"
            variant="outlined"
            onClick={handleLogout}
          >
            {userName}
          </button>
        ) : (
          <button
            className="dd--text-decoration--none dd--font-weight--700 dd--color--white dd--border-radius--8px dd--cursor--pointer login-button"
            color="inherit"
            variant="outlined"
            onClick={handleOpen}
          >
            Login
          </button>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default Navbar;
