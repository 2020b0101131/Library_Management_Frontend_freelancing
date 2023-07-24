import React from "react";

const Child = ({ id, name }) => {
  return (
    <div className="d-flex flex-row mb-3">
      <div
        className="card"
        style={{
          width: "18rem",
          border: "2px solid black",
          margin: "4px",
          borderRadius: "10px",
        }}
      >
        <img src="" className="card-img-top" alt="NO IMG" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{id}</li>
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>
      {/* //////////////////// */}
      <div
        // className="card"
        className="d-flex flex-row mb-3"
        style={{
          width: "18rem",
          border: "2px solid black",
          margin: "4px",
          borderRadius: "10px",
        }}
      >
        <img src="" className="card-img-top" alt="NO IMG" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{id}</li>
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>
      {/* //////////////////////////////////////////// */}
      <div
        // className="card"
        className="d-flex flex-row mb-3"
        style={{
          width: "18rem",
          border: "2px solid black",
          margin: "4px",
          borderRadius: "10px",
        }}
      >
        <img src="" className="card-img-top" alt="NO IMG" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{id}</li>
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>
      {/* /////////////////////////// */}
      <div
        className="card"
        style={{
          width: "18rem",
          border: "2px solid black",
          margin: "4px",
          borderRadius: "10px",
        }}
      >
        <img src="" className="card-img-top" alt="NO IMG" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{id}</li>
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>
    </div>
  );
};

export default Child;
