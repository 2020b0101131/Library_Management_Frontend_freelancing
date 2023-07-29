
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
        question: "What is the Central Limit Theorem, and why is it important in statistics?",
        answer:
          "The Central Limit Theorem states that the sampling distribution of the sample means approaches a normal distribution as the sample size increases, regardless of the shape of the population distribution. It is crucial because it allows us to make inferences about a population using sample data and simplifies statistical analysis.",
      },
      {
        question: "What is the difference between supervised and unsupervised learning?",
        answer: `Supervised Learning: In supervised learning, the algorithm is trained on labeled data, where the target variable (output) is known. The goal is to learn a mapping between the input and output variables to make predictions on new, unseen data.
        Unsupervised Learning: In unsupervised learning, the algorithm is trained on unlabeled data, and the goal is to discover patterns, structures, or relationships within the data without specific guidance.`,
      },
      {
        question: "How do you handle missing data in a dataset?",
        answer: `Missing data can be handled by:
        Removing rows or columns with missing data if the amount of missing data is small.
        Imputing missing values using techniques like mean, median, or regression imputation.
        Using advanced imputation methods like K-nearest neighbors or multiple imputation.`,
      },
      {
        question: "Explain the concept of overfitting in machine learning..",
        answer: "Overfitting occurs when a model performs well on the training data but fails to generalize to new, unseen data. It happens when the model captures noise or random fluctuations instead of the underlying patterns in the data.",
      },
      {
        question: "What is the purpose of cross-validation in machine learning, and how is it done?",
        answer: "Cross-validation is used to estimate the performance of a machine learning model and reduce overfitting. It involves dividing the data into multiple subsets (folds). The model is trained on a subset of the data and tested on the remaining fold, repeating the process for each fold.",
      },
      {
        question: "What is the difference between precision and recall?",
        answer: `Precision is the proportion of true positive predictions out of all positive predictions. It measures the accuracy of positive predictions.
        Recall is the proportion of true positive predictions out of all actual positive instances. It measures the ability to find all positive instances.`,
      },
      {
        question: "What are outliers, and how do they impact statistical analysis?",
        answer: "Outliers are data points that significantly deviate from the rest of the data. They can impact statistical analysis by skewing results, affecting measures like the mean and standard deviation.",
      },
      {
        question: "Explain the bias-variance trade-off in machine learning.",
        answer: `The bias-variance trade-off is a key concept in machine learning that deals with the balance between the model's ability to fit the training data (low bias) and generalize to new, unseen data (low variance). High bias can lead to underfitting, while high variance can lead to overfitting.`,
      },
      {
        question: "What is the purpose of feature scaling in machine learning, and what are some common scaling techniques?",
        answer: "Feature scaling is used to standardize or normalize the range of independent variables in machine learning. Common scaling techniques include Min-Max scaling, Z-score scaling (Standardization), and Robust scaling.",
      },
      {
        question: "What is the purpose of regularization in machine learning, and how does it work?",
        answer: 'Regularization is used to prevent overfitting in machine learning models. It adds a penalty term to the loss function, discouraging the model from fitting the noise in the training data. Common regularization methods include L1 (Lasso) and L2 (Ridge) regularization.',
      },
    // Add more questions and answers as needed
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center my-4">Common Python Interview Questions and Answers</h1>
      <div className="card mt-5">
        <div className="card-body">
          <ol className="list-group list-group-numbered list-group-flush mt-4 h6">
            {questionsAndAnswers.map((item, index) => (
              <li key={index} className="list-group-item">
                <div className="form-check">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked={showAnswers[index] || false}
                    aria-label="..."
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
