import React, { useState } from "react";
import "../Utils.css";
import "../Style.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { UserLogin } from "./SearchedData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ props }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  const handleClick = () => {
    handleClose();
    navigate("/register");
  };

  const handleSignIn = () => {
    if (!email || !password) {
      toast.error("Please fill the input fields!");
    } else if (!email.includes("@")) {
      toast.error("Please fill valid email id");
    } else if (localStorage.getItem("email") === email) {
      dispatch(UserLogin(true));
      handleClose();
      toast.success("Login successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/");
      }, 6000);
    } else {
      toast.error("User not found, please register", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="dd--flex--center dd--main--container--100vh">
      <div
        className="dd--flex-direction--column dd--border-radius--5px card"
        open={open}
        onClose={handleClose}
      >
        <h3 className="head-color card-heading">Login</h3>
        <input
          type="email"
          className="dd--outline--none dd--border-radius--8px form-input"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="dd--outline--none dd--border-radius--8px form-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="dd--outline--none dd--border-radius--8px dd--cursor--pointer login-form-button"
          onClick={handleSignIn}
        >
          Login
        </button>
        <ToastContainer />
        <hr className="hr" />
        <p>You don't have an account ?</p>
        <div className="login-span">
          Click on
          <span
            className="dd--text-decoration--none dd--cursor--pointer login-form-register-button"
            onClick={handleClick}
          >
            Register
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
