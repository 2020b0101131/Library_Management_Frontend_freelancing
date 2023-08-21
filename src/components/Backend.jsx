import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { addData, display } from "../service/Api";
const Backend = () => {
  const [value,setValue]=useState();
  const handleAdd = (e) => {
    e.preventDefault();
    addData({value});
    var first=display();
    console.log("return data",first.value);
  };
  const handleDel = () => {};
  return (
    <div className="container   ">
      <h1>Common Backend Interview Questions and Answers</h1>
      <div class="card mt-5 w-100">
        <div class="card-body">
          {/* /////////////////////////////////////////////////////////// */}
          <table class="table">
            <thead>
              <tr>
                
                <th scope="col">
                  <form>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        
                      </label>
                      <input
                        type="textbox"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={value}
                        onChange={(e)=>{
                          setValue(e.target.value);
                        }}
                      />
                      <div id="emailHelp" className="form-text">
                        Kindly add your favarote question.
                      </div>
                    </div>
                    <button className="btn btn-primary"onClick={(e) => handleAdd(e)}>ADD</button>
                  <button className="btn btn-secondary"onClick={(e) => handleDel()}>DEL</button>
                  </form>

                  
                </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          {/* ///////////////////////////////////////////////////////////////////// */}
          <ol className="list-group list-group-numbered list-group-flush mt-4 ">
            <li className="list-group-item ">
              {" "}
              <input
                className="form-check-input me-1 "
                type="checkbox"
                defaultValue
                aria-label="..."
              />
              What is an example of when you would use caching?
            </li>
            <li className="list-group-item">
              {" "}
              <input
                className="form-check-input me-1"
                type="checkbox"
                defaultValue
                aria-label="..."
              />
              How would you select a cache strategy (e.g., LRU, FIFO)?
            </li>
            <li className="list-group-item">
              {" "}
              <input
                className="form-check-input me-1"
                type="checkbox"
                defaultValue
                aria-label="..."
              />
              What are some common issues with ORMs?
            </li>
            <li className="list-group-item">
              {" "}
              <input
                className="form-check-input me-1"
                type="checkbox"
                defaultValue
                aria-label="..."
              />
              When should you use asynchronous programming?
            </li>
            <li className="list-group-item">
              {" "}
              <input
                className="form-check-input me-1"
                type="checkbox"
                defaultValue
                aria-label="..."
              />
              What is the difference between promises and callbacks?
            </li>
            <li className="list-group-item">
              {" "}
              <input
                className="form-check-input me-1"
                type="checkbox"
                defaultValue
                aria-label="..."
              />
              What is closure?
            </li>
            <li className="list-group-item">
              {" "}
              <input
                className="form-check-input me-1"
                type="checkbox"
                defaultValue
                aria-label="..."
              />
              What is the difference between a Class and an Interface in Java?
            </li>
            <li className="list-group-item">
              {" "}
              <input
                className="form-check-input me-1"
                type="checkbox"
                defaultValue
                aria-label="..."
              />
              What is continuous integration?
            </li>
            <li className="list-group-item">
              {" "}
              <input
                className="form-check-input me-1"
                type="checkbox"
                defaultValue
                aria-label="..."
              />
              What is a software development kit (SDK)?
            </li>
            <li className="list-group-item">
              {" "}
              <input
                className="form-check-input me-1"
                type="checkbox"
                defaultValue
                aria-label="..."
              />
              What are the tradeoffs of client-side rendering vs. server-side
              rendering?
            </li>
          </ol>
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////// */}
    </div>
  );
};

export default Backend;
