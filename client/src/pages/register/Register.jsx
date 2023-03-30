import { useState } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./register.scss";
import FormData from "form-data";
import axios from "axios";

const Register = () => {
  const INITIAL = {
    fullName: "",
    userName: "",
    email: "",
    password: "",
    profilePicture: null,
    bio: "",
  };
  const [userData, setUserData] = useState(INITIAL);
  const handleChange = (e) => {
    const newUser = { ...userData };

    e.target.name === "profilePicture"
      ? (newUser[e.target.name] = e.target.files[0])
      : (newUser[e.target.name] = e.target.value);
    setUserData(newUser);
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.password !== userData.passwordAgain) {
      alert("Passwords don't match!");
    } else {
      if (userData.profilePicture) {
        const data = new FormData();
        const fileName = Date.now() + userData.profilePicture.name;
        data.append("name", fileName);
        data.append("file", userData.profilePicture);
        userData.profilePicture = fileName;
        try {
          await axios.post(`/upload`, data);
        } catch (error) {
          console.log(error);
        }
      }
      try {
        await fetch(`/auth/register`, {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        toast.success("Registration succesfull!");
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="auth-page">
      <h1>Welcome to Social Media App</h1>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-input">
          <input
            required
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <input
            required
            type="text"
            name="userName"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <input
            required
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <input
            required
            type="password"
            name="passwordAgain"
            placeholder="Password Confirm"
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <input
            required
            type="file"
            name="profilePicture"
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <input
            required
            type="text"
            name="bio"
            label="Biography"
            onChange={handleChange}
          />
        </div>
        <Link to="/login" className="auth-link" href="/">
          Back to Login
        </Link>
        <Button type="submit" variant="contained" color="success">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
