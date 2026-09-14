import React from "react";

const QuizPage = () => {
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

        <div className="answer-options">
            {/* either make a component for each answer option */}
            <button className="answer-option bg-white text-black py-2 px-4 rounded-lg shadow hover:bg-gray-200">
              Paris
            </button>
            <button className="answer-option bg-white text-black py-2 px-4 rounded-lg shadow hover:bg-gray-200">
              London
            </button>
            <button className="answer-option bg-white text-black py-2 px-4 rounded-lg shadow hover:bg-gray-200">
              Berlin
            </button>
            <button className="answer-option bg-white text-black py-2 px-4 rounded-lg shadow hover:bg-gray-200">
              Madrid
            </button>
        </div>

      </div>
    </div>
  );
};

export default QuizPage;
