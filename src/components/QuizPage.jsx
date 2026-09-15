import React from "react";

const answerOptions = ["Paris", "London", "Berlin", "Madrid"];

const AnswerOption = ({ option, onSelect }) => (
  <button
    type="button"
    className="answer-option bg-white text-black py-2 px-4 rounded-lg shadow hover:bg-gray-200 transition-colors"
    onClick={() => onSelect(option)}
  >
    {option}
  </button>
);

const QuizPage = () => {
  const handleAnswerSelect = (selectedOption) => {
    console.log("Selected option:", selectedOption);
  };

  return (
    <div className="quiz-container flex flex-col items-center justify-center min-h-screen bg-blue-600">
      <div className="text-center text-white p-8 rounded-lg shadow-lg bg-linear-to-r from-blue-500 to-green-400">
        <div className="question-container flex justify-between gap-8 items-center mb-6">
          <div className="q-left flex flex-col items-start mb-4">
            <span className="question-number text-sm font-bold mb-4">
              Question: 1 / 5
            </span>
            <h2 className="question font-bold text-xl mb-6">
              What is the capital of France?
            </h2>
          </div>

          <div className="q-right text-black">
            <span>Score: 0</span>
          </div>
        </div>

        <div className="answer-options flex flex-wrap gap-4 justify-center">
          {answerOptions.map((option) => (
            <AnswerOption
              key={option}
              option={option}
              onSelect={handleAnswerSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
