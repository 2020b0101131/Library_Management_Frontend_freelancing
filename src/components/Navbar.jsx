import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../img/logo_interview.png";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#212529",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand text-light">
          <img src={logo} alt="logo" style={{ height: "40px" }} />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: "transparent" }} // removes border from the button
        >
          <span
            className="navbar-toggler-icon"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30' width='30' height='30' fill='white'%3E%3Cpath stroke='none' d='M4 7h22v2H4zM4 15h22v2H4zM4 23h22v2H4z'/%3E%3C/svg%3E")`,
            }}
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" >
            <li className="nav-item" style={{marginTop:"5px"}}>
              <NavLink className="nav-link text-light" to="/codeforuser">
              Interview Q&A
              </NavLink>
            </li>
            <li className="nav-item" style={{marginTop:"5px"}}>
              <NavLink className="nav-link text-light" to="/allusers">
                All Candidates
              </NavLink>
            </li>
            <li className="nav-item" style={{marginTop:"5px"}}>
              <NavLink className="nav-link text-light" to="/adduser">
                Add Candidate
              </NavLink>
            </li>
            <li className="nav-item" style={{marginTop:"5px"}}>
              <NavLink className="nav-link text-light" to="/room">
                Schedule Interview
              </NavLink>
            </li>
            <li className="nav-item">
              <div class="dropdown">
                <button
                  class="btn btn-dark dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: "#212529" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                    style={{ verticalAlign: "middle" }}
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </button>

                <ul
                  class="dropdown-menu dropdown-menu-end"
                  style={{ backgroundColor: "#212529", textAlign: "center" }}
                >
                  <li>
                    {" "}
                    <NavLink className="nav-link text-light" to="/userprofile">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person-lines-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                      </svg>{" "}
                      <span>Profile</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link text-light" to="/login">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-box-arrow-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
                        />
                      </svg>{" "}
                      <span
                        onClick={() => {
                          localStorage.removeItem("authToken");
                        }}
                      >
                        Logout
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link text-light" to="/login">
             Logout
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
