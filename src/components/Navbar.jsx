import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo_interview.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#212529", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand text-light">
          <img src={logo} alt="logo" style={{ height: '40px' }} />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: 'transparent' }} // removes border from the button
        >
          <span className="navbar-toggler-icon" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30' width='30' height='30' fill='white'%3E%3Cpath stroke='none' d='M4 7h22v2H4zM4 15h22v2H4zM4 23h22v2H4z'/%3E%3C/svg%3E")` }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/codeforuser">
                Code for Interview
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/allusers">
                All Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/adduser">
                Add User
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/room">
                Schedule Interview
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/userprofile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                  style={{ verticalAlign: 'middle' }}
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
