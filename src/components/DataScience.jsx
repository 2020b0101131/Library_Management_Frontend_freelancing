import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Python = () => {
  const [showAnswers, setShowAnswers] = useState([]);

  const toggleAnswer = (index) => {
    setShowAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[index] = !updatedAnswers[index];
      return updatedAnswers;
    });
  };

  const questionsAndAnswers = [
    // ... (questions and answers as before)
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4">Common Python Interview Questions and Answers</h1>
        <p className="lead text-muted">
          Expand your knowledge with these frequently asked Python interview questions.
        </p>
      </div>

      <div className="card shadow-lg">
        <div className="card-body">
          <ol className="list-group list-group-numbered list-group-flush">
            {questionsAndAnswers.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked={showAnswers[index] || false}
                    aria-label="Toggle answer visibility"
                    onChange={() => toggleAnswer(index)}
                  />
                  <label className="form-check-label h5">{item.question}</label>
                </div>
                {showAnswers[index] && (
                  <div className="mt-3 answer">
                    <strong>Answer:</strong> {item.answer}
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Python;
