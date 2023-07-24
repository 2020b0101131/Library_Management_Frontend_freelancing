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
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <NavLink to="/backend" className="btn btn-primary">
                  Click to View
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
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <NavLink to="#" className="btn btn-primary">
                  Go somewhere
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
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <NavLink to="#" className="btn btn-primary">
                  Go somewhere
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
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <NavLink to="#" className="btn btn-primary">
                  Go somewhere
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
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <NavLink to="#" className="btn btn-primary">
                  Go somewhere
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
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <NavLink to="#" className="btn btn-primary">
                  Go somewhere
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
