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
    {
      question: "What is the Global Interpreter Lock (GIL) in Python?",
      answer:
        "The Global Interpreter Lock (GIL) is a mutex used in CPython (the default Python interpreter) to ensure that only one thread executes Python bytecode at a time. This restricts the parallel execution of threads and affects multi-core CPU utilization.",
    },
    {
      question: "Explain the differences between range and xrange in Python 2.",
      answer: "In Python 2, range returns a list of numbers, while xrange returns an xrange object, which is a lazy evaluated sequence and consumes less memory when dealing with large ranges. In Python 3, xrange is no longer available, and range behaves like Python 2's xrange.",
    },
    {
      question: "What are Python decorators, and how are they used?",
      answer: "Decorators are functions that modify the behavior of other functions. They are denoted by the @decorator_name syntax and can be used to add functionalities such as logging, authorization, or caching to functions.",
    },
    {
      question: "Explain the usage of __init__ in Python classes.",
      answer: "__init__ is a special method (constructor) that is automatically called when a new instance of a class is created. It is used to initialize the object's attributes.",
    },
    {
      question: "What is the purpose of a virtual environment in Python?",
      answer: "A virtual environment is used to create isolated Python environments to manage project dependencies. It helps avoid conflicts between different projects that may require different package versions.",
    },
    {
      question: "How do you handle exceptions in Python?",
      answer: "Exceptions can be handled using the try, except, and optionally else and finally blocks. The code inside the try block is executed, and if an exception occurs, the corresponding except block is executed.",
    },
    {
      question: "What are lambda functions in Python?",
      answer: "Lambda functions, also known as anonymous functions, are small, one-line functions defined without a name. They are often used for simple operations where a full function definition is not required.",
    },
    {
      question: "Explain the difference between shallow copy and deep copy in Python.",
      answer: `Shallow Copy: Creates a new object, but the contents are references to the original objects. Modifications in the new object may affect the original object.
      Deep Copy: Creates a new object along with recursively creating new objects for nested objects. Changes in the new object won't affect the original object.`,
    },
    {
      question: "What are lambda functions in Python?",
      answer: "Lambda functions, also known as anonymous functions, are small, one-line functions defined without a name. They are often used for simple operations where a full function definition is not required.",
    },
    {
      question: "How do you handle file I/O in Python?",
      answer: 'File I/O in Python can be achieved using the built-in open() function. To read from a file, use open("filename.txt", "r"). To write to a file, use open("filename.txt", "w").',
    },
    // Add more questions and answers as needed
  ];

  return (
    <div className="container">
      <h1>Common Python Interview Questions and Answers</h1>
      <div className="card mt-5 w-50">
        <div className="card-body">
          <ol className="list-group list-group-numbered list-group-flush mt-4">
            {questionsAndAnswers.map((item, index) => (
              <li key={index} className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  checked={showAnswers[index] || false}
                  aria-label="..."
                  onChange={() => toggleAnswer(index)}
                />
                {item.question}
                {showAnswers[index] && (
                  <div className="mt-3">
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
