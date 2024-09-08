import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerUser } from "../service/Api.jsx";
import logo from "../img/logo_interview.png";
import "../style/loginRegister.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from "../components/Loader"; // Import the custom Loader component

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [loading, setLoading] = useState(false); // Add loader state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const response = await registerUser({ username, email, password });
      alert("Registered Successfully");
      navigate("/userprofile", { state: response.data });
    } catch (error) {
      console.log("Error while registering", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="register-container px-3 " style={{ marginBottom: '4rem', }}>
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
      <marquee className="fixed-top "id="gfg" style={{backgroundColor:'yellow',marginTop: '4rem'}}><b>Notice: Due to high server traffic, registration may take a few moments. We appreciate your patience.</b></marquee>

      <div className="register-card" style={{ height: {md:'80vh'}, marginTop: "5rem", position: 'relative', }}>
        {loading && (
          <div className="text-center mb-4">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
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
          <button
            className="btn gradient-btn w-100 mt-3"
            onClick={(e) => handleSubmit(e)}
            disabled={loading} // Disable button when loading
          >
            {loading ? "Registering..." : "Register Now"}
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
