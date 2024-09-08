import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../service/Api.jsx";
import logo from "../img/logo_interview.png";
import "../style/loginRegister.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast, ToastContainer } from 'react-bootstrap';


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState(""); // 'success', 'error', 'warning'
  const [showToast, setShowToast] = useState(false); // Track whether to show the toast

  const handleSign = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const backend_response = await loginUser({ email, password });
      setToastMessage(backend_response.data.message);
      setToastType(backend_response.data.message === "Login Successful" ? "success" : "warning");
      setShowToast(true); // Show the toast
      if (backend_response.data.message === "Login Successful") {
        setTimeout(() => navigate("/codeforuser"), 1000); // Navigate after 1 second
      }
    } catch (error) {
      setToastMessage("Login failed. Please try again.");
      setToastType("error");
      setShowToast(true); // Show the toast
      console.log("Error while handleSubmit", error);
    } finally {
      setLoading(false);
    }
  };

  // Hide the toast after 3 seconds
  React.useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  // Determine the background color based on toastType
  const getToastStyle = () => {
    switch (toastType) {
      case "success":
        return { backgroundColor: "#06D001", color: "#fff" };
      case "error":
        return { backgroundColor: "#FF4C4C", color: "#fff" };
      case "warning":
        return { backgroundColor: "#FFDE4D", color: "#000" };
      default:
        return {};
    }
  };

  return (
    <div className="login-container p-3 mt-5 ">
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
      <marquee className="fixed-top "id="gfg" style={{backgroundColor:'yellow',marginTop: '4rem'}}><b>Notice: Due to high server traffic, signing in may take a few moments. We appreciate your patience.</b></marquee>

      <div className="login-card " style={{ height: {md:'80vh'}, marginTop:'1rem' }}>
        <h2 className="text-center mb-4">Welcome to InterviewG</h2>
        {loading && <div className="text-center mb-4"><div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div></div>}
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

      {/* Bootstrap Toasts */}
      {showToast && (
        <ToastContainer position="top-end" className="p-3">
          <Toast style={getToastStyle()} autohide>
            <Toast.Body>{toastMessage}</Toast.Body>
          </Toast>
        </ToastContainer>
      )}
    </div>
  );
};

export default Login;
