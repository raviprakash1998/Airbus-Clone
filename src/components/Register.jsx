import React, { useState } from "react";
import "../Utils.css";
import "../Style.css";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  const handleClick = () => {
    handleClose();
    navigate("/login");
  };

  const handleSignUp = async () => {
    if (!email.includes("@")) {
      toast.error("Please fill correct email id");
    } else if (name && email && password) {
      await createUserWithEmailAndPassword(auth, email, password).then(
        async (res) => {
          const user = res.user;
          await updateProfile(user, {
            displayName: name,
          });
        }
      );
      // localStorage.setItem("name", name);
      // localStorage.setItem("email", email);
      // localStorage.setItem("password", password);

      toast.success("Signed up successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      const user = setTimeout(() => {
        navigate("/login");
      }, 3000);
    } else {
      toast.error("Please fill all the fields", {
        position: "top-right",
        autoClose: 3000,
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
    <>
      <div className="dd--flex--center dd--main--container--100vh">
        <div
          className="dd--flex-direction--column dd--border-radius--5px card"
          open={open}
          onClose={handleClose}
        >
          <h3 className="head-color card-heading">Register</h3>
          <input
            type="text"
            className="dd--outline--none dd--border-radius--8px form-input full-name"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="dd--outline--none dd--border-radius--8px form-input"
            placeholder="Username"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="dd--outline--none dd--border-radius--8px form-input"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleSignUp}
            type="submit"
            className="dd--outline--none dd--border-radius--8px dd--cursor--pointer login-form-button"
          >
            Register
          </button>
          <ToastContainer />
          <hr className="hr" />
          <p>Already have an account ?</p>
          <div className="login-span">
            Click on
            <span
              className="dd--text-decoration--none dd--cursor--pointer login-form-register-button"
              onClick={handleClick}
            >
              Login
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
