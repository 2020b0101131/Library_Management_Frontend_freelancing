import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../service/Api.jsx";
import logo from "../img/logo_interview.jpg";
import "../style/loginRegister.css"; 

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSign = async (e) => {
    e.preventDefault();
    try {
      const backend_response = await loginUser({ email, password });
      alert(backend_response.data.message);
      if (backend_response.data.message === "Login Successful") {
        navigate("/codeforuser");
      }
    } catch (error) {
      console.log("Error while handleSubmit", error);
    }
  };

  return (
    <div className="login-container" >
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" >
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

      <div className="login-card" style={{ height: '80vh', marginTop:'1rem'
 }}>
        <h2 className="text-center mb-4">Welcome to InterviewG</h2>
        {/* <p className="text-center">Sign in with:</p>
        <div className="social-buttons text-center">
          <button className="social-btn fb-btn"><i className="fab fa-facebook-f" /></button>
          <button className="social-btn google-btn"><i className="fab fa-google" /></button>
          <button className="social-btn twitter-btn"><i className="fab fa-twitter" /></button>
          <button className="social-btn github-btn"><i className="fab fa-github" /></button>
        </div>
        <p className="text-center mt-3">or use your email:</p> */}
        <form className="form">
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
          <div className="options d-flex justify-content-between">
            <label className="form-check-label">
              <input type="checkbox" defaultChecked /> Remember me
            </label>
            <NavLink to="#!" className="forgot-link">Forgot password?</NavLink>
          </div>
          <button className="btn gradient-btn w-100 mt-3" onClick={(e) => handleSign(e)}>
            Sign In
          </button>
        </form>
        <div className="text-center mt-4">
          <p>Not a member? <NavLink to="/register" className="link">Register Now</NavLink></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
