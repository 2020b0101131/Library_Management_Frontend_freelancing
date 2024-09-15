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
import "../style/codeForUser.css";
const CodeforUser = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-4 " style={{ color: "#FFEB00" }}>
          Explore Interview Q&A
        </h2>
        <p className="lead text-muted">
          Choose a category to browse interview questions and answers
        </p>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Card 1 */}
        <div className="col">
          <div className="card h-100 card-custom">
            <img src={bd} className="card-img-top" alt="Backend Developer" />
            <div className="card-body">
              <h5 className="card-title">Backend Developer</h5>
              <p className="card-text">
                Create and maintain server-side apps, databases, and APIs for
                web functionality.
              </p>
              <NavLink to="/backend" className="btn btn-primary btn-custom">
                View Q/A
              </NavLink>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col">
          <div className="card h-100 card-custom">
            <img
              src={front}
              className="card-img-top"
              alt="Frontend Developer"
            />
            <div className="card-body">
              <h5 className="card-title">Frontend Developer</h5>
              <p className="card-text">
                Design and implement user interface components for web apps and
                sites.
              </p>
              <NavLink to="/Frontend" className="btn btn-primary btn-custom">
                View Q/A
              </NavLink>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col">
          <div className="card h-100 card-custom">
            <img src={fs} className="card-img-top" alt="Web Developer" />
            <div className="card-body">
              <h5 className="card-title">Web Developer</h5>
              <p className="card-text">
                Develop front-end and back-end applications for seamless web
                experiences.
              </p>
              <NavLink to="/WebDev" className="btn btn-primary btn-custom">
                View Q/A
              </NavLink>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col">
          <div className="card h-100 card-custom">
            <img src={dsci} className="card-img-top" alt="Data Science" />
            <div className="card-body">
              <h5 className="card-title">Data Science</h5>
              <p className="card-text">
                Extract insights from data using algorithms, methods, and tools.
              </p>
              <NavLink to="/DataScience" className="btn btn-primary btn-custom">
                View Q/A
              </NavLink>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col">
          <div className="card h-100 card-custom">
            <img src={python} className="card-img-top" alt="Python Developer" />
            <div className="card-body">
              <h5 className="card-title">Python Developer</h5>
              <p className="card-text">
                Master the simplicity and power of Python programming.
              </p>
              <NavLink to="/Python" className="btn btn-primary btn-custom">
                View Q/A
              </NavLink>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col">
          <div className="card h-100 card-custom">
            <img src={java} className="card-img-top" alt="Java Developer" />
            <div className="card-body">
              <h5 className="card-title">Java Developer</h5>
              <p className="card-text">
                Leverage Java's platform independence and object-oriented
                design.
              </p>
              <NavLink to="/Java" className="btn btn-primary btn-custom">
                View Q/A
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeforUser;
