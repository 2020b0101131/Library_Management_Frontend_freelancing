import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { addQuestion, deleteQuestion, display } from "../service/Api";

const WebDeveloper = () => {
  const [value, setValue] = useState("");
  const [rowData, setRowData] = useState([]);
  const pageId = 3;
  const getAllQuestion = async () => {
    try {
      let response = await display(pageId);
      setRowData(response.data);
    } catch (error) {
      setRowData([]);
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    // Initialize the tooltip
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  useEffect(() => {
    getAllQuestion();
  }, []);

  const handleDel = async (id) => {
    try {
      await deleteQuestion(id);
      getAllQuestion(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await addQuestion({
        question_text: value,
        subject_id: pageId,
      });
      setValue("");
      getAllQuestion(); // Refresh the list after adding
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };

  return (
    <div className="container mt-5" style={{ marginBottom: "3rem" }}>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center mb-5">
            <h1 className="display-5" style={{ color: "#FFEB00" }}>
              Web Developer Interview Questions
            </h1>
            <p className="lead text-muted">
              Add, review, and practice important questions for web developer
              interviews.
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
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-primary"
                    style={{ paddingLeft: "4rem", paddingRight: "4rem" }}
                    onClick={(e) => handleAdd(e)}
                  >
                    Add Question
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
                {rowData.map((question) => (
                  <li
                    style={{ textAlign: "justify" }}
                    key={question.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <span>{question.question_text}</span>

                    <button
                      style={{
                        fontSize: "12px",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                      }}
                      className="btn btn-danger"
                      onClick={() => handleDel(question.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                      </svg>
                    </button>
                  </li>
                ))}
                {[
                  "What is the difference between HTTP and HTTPS?",
                  "What is the purpose of the 'DOCTYPE' declaration in HTML?",
                  "What is the difference between 'localStorage' and 'sessionStorage'.",
                  "What is a RESTful API?",
                  "What is the purpose of Cross-Origin Resource Sharing (CORS) in web development?",
                  "Explain the concept of a responsive web design.",
                  "What is the purpose of a CSS preprocessor like Sass or Less?",
                  "What are the main differences between a PUT request and a POST request in HTTP?",
                  "What is the Document Object Model (DOM) in web development?",
                  "What are some methods to optimize website performance?",
                ].map((question, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <span>{question}</span>
                    <span
                      class="d-inline-block"
                      tabindex="0"
                      data-toggle="tooltip"
                      title="Action Restricted: Deletion Not Allowed"
                    >
                      <button
                        disabled
                        style={{
                          fontSize: "12px",
                          paddingTop: "5px",
                          paddingBottom: "5px",
                        }}
                        className="btn btn-secondary"
                        onClick={() => handleDel(question.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                        </svg>
                      </button>
                    </span>
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

export default WebDeveloper;
