import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerUser } from "../service/Api.jsx";
import logo from "../img/logo_interview.jpg";
import "../style/loginRegister.css"

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({ username, email, password });
      alert("Registered Successfully");
      navigate("/userprofile", { state: response.data });
    } catch (error) {
      console.log("Error while registering", error);
    }
  };

  return (
    <div className="register-container" style={{marginBottom:'4rem'}}>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="register-card" style={{height:'90vh',marginTop:"5rem",}}>
        <h2 className="text-center mb-4">Create Your Account</h2>
        <form className="form">
          <div className="form-outline">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-outline">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-outline">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-outline">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
              required
            />
          </div>
          <button className="btn gradient-btn w-100 mt-3" onClick={(e) => handleSubmit(e)}>
            Register Now
          </button>
        </form>
        <div className="text-center mt-4">
          <p>Already have an account? <NavLink to="/login" className="link">Sign In</NavLink></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
