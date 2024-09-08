import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { addData, display } from "../service/Api";

const Backend = () => {
  const [value, setValue] = useState("");
  const handleAdd = (e) => {
    e.preventDefault();
    addData({ value });
    var first = display();
    console.log("return data", first.value);
  };
  const handleDel = () => {};

  return (
    <div className="container mt-5" style={{marginBottom:"3rem"}}>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center mb-5">
            <h1 className="display-5">Backend Interview Questions</h1>
            <p className="lead text-muted">
              Add, review, and practice important questions for backend interviews.
            </p>
          </div>

          {/* Card for Adding a Question */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="questionInput" className="form-label fw-bold">
                    Add Your Favorite Question
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="questionInput"
                    value={value}
                    placeholder="Type your question here"
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <div className="form-text">
                    Please add a question that you'd like to practice.
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-primary" onClick={(e) => handleAdd(e)}>
                    ADD
                  </button>
                  <button className="btn btn-danger" onClick={(e) => handleDel()}>
                    DELETE
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* List of Questions */}
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title mb-4">Interview Questions</h4>
              <ul className="list-group list-group-flush">
                {[
                  "What is an example of when you would use caching?",
                  "How would you select a cache strategy (e.g., LRU, FIFO)?",
                  "What are some common issues with ORMs?",
                  "When should you use asynchronous programming?",
                  "What is the difference between promises and callbacks?",
                  "What is closure?",
                  "What is the difference between a Class and an Interface in Java?",
                  "What is continuous integration?",
                  "What is a software development kit (SDK)?",
                  "What are the tradeoffs of client-side rendering vs. server-side rendering?"
                ].map((question, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    <span>{question}</span>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      aria-label={`Mark question ${index + 1}`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
