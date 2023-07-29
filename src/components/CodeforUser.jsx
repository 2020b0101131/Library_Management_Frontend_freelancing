import React from "react";
import bd from "../img/backend developer.jpg";
import dsci from "../img/datascience.jpg";
import ds from "../img/datastructure.jpg";
import front from "../img/frontend.jpg";
import fs from "../img/fullstack.jpg";
import java from "../img/java.jpg";
import python from "../img/python.jpg";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
const CodeforUser = () => {
  return (
    <div>
      <div className="container">
        {/* ////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////// */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={bd} className="card-img-top" alt="Backend Developer" />
              <div className="card-body">
                <h5 className="card-title">Backend Developer</h5>
                <p className="card-text">
                  Backend developers create and maintain server-side
                  applications, databases, and APIs for web and software
                  functionality.
                </p>
                <NavLink to="/backend" className="btn btn-primary">
                  Click to View Q/A
                </NavLink>
              </div>

              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={front}
                className="card-img-top"
                alt="Frontend Developer"
              />
              <div className="card-body">
                <h5 className="card-title">Frontend Developer</h5>
                <p className="card-text">
                  Frontend developers create and implement user interface
                  components, ensuring a seamless and engaging user experience
                  on websites and applications.
                </p>
                <NavLink to="/Frontend" className="btn btn-primary">
                  Click to View Q/A
                </NavLink>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={fs}
                className="card-img-top"
                alt="Full Stack Developer"
              />
              <div className="card-body">
                <h5 className="card-title">Web Developer</h5>
                <p className="card-text">
                  Web developers design, develop, and maintain websites,
                  combining frontend and backend skills to create functional and
                  user-friendly online platforms.
                </p>
                <NavLink to="/WebDev" className="btn btn-primary">
                  Click to View Q/A
                </NavLink>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={dsci} className="card-img-top" alt="Data Science" />
              <div className="card-body">
                <h5 className="card-title">Data Science</h5>
                <p className="card-text">
                  Data science is an interdisciplinary field that extracts
                  insights from data using scientific methods, algorithms, and
                  technology for decision-making.
                </p>
                <NavLink to="/DataScience" className="btn btn-primary">
                  Click to View Q/A
                </NavLink>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={python} className="card-img-top" alt="Python" />
              <div className="card-body">
                <h5 className="card-title">Python Developer</h5>
                <p className="card-text">
                  Python is a high-level, versatile programming language known
                  for its simplicity, readability, and extensive libraries for
                  diverse applications.
                </p>
                <NavLink to="/Python" className="btn btn-primary">
                  Click to View Q/A
                </NavLink>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={java} className="card-img-top" alt="Java" />
              <div className="card-body">
                <h5 className="card-title">Java Developer</h5>
                <p className="card-text">
                  Java is an object-oriented, platform-independent programming
                  language known for its versatility and "write once, run
                  anywhere" capability.
                </p>
                <NavLink to="/Java" className="btn btn-primary">
                  Click to View Q/A
                </NavLink>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>

        {/* ////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////// */}
      </div>
    </div>
  );
};

export default CodeforUser;
