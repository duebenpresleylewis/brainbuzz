import React from 'react';

const AnswerOption = ({ option, onSelect, isSelected, isCorrect, isRevealed }) => {
  const buttonClass = isRevealed
    ? isCorrect
      ? 'bg-emerald-500 text-white border-emerald-400'
      : isSelected
        ? 'bg-red-500 text-white border-red-400'
        : 'bg-white/60 text-slate-700 border-slate-200'
    : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-100';

  return (
    <button
      type="button"
      className={`answer-option w-full rounded-xl border px-4 py-3 text-left font-semibold shadow-sm transition duration-200 ${buttonClass}`}
      onClick={() => onSelect(option)}
      disabled={isRevealed}
    >
      {option}
    </button>
  );
};

const QuizPage = ({
  question,
  questionNumber,
  totalQuestions,
  score,
  onAnswer,
  selectedAnswer,
  isCorrect,
  onNextQuestion,
}) => {
  const isRevealed = selectedAnswer !== null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 px-4 py-10">
      <div className="w-full max-w-3xl rounded-3xl bg-white/10 p-6 text-white shadow-2xl backdrop-blur-sm sm:p-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
              Question {questionNumber} / {totalQuestions}
            </p>
            <h2 className="text-2xl font-black leading-tight sm:text-3xl">{question.question}</h2>
          </div>

          <div className="rounded-full bg-white/15 px-4 py-2 text-lg font-bold text-cyan-50 shadow-md">
            Score: {score}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {question.options.map((option) => (
            <AnswerOption
              key={option}
              option={option}
              onSelect={onAnswer}
              isSelected={selectedAnswer === option}
              isCorrect={option === question.answer}
              isRevealed={isRevealed}
            />
          ))}
        </div>

        {isRevealed && (
          <div className="mt-8 rounded-2xl bg-black/15 p-4 text-center">
            <p className="text-lg font-bold">
              {isCorrect ? 'Correct! Great job.' : `Not quite — the correct answer is ${question.answer}.`}
            </p>

            <button
              type="button"
              className="mt-4 rounded-full bg-white px-5 py-2.5 text-base font-bold text-blue-700 shadow hover:bg-blue-50"
              onClick={onNextQuestion}
            >
              {questionNumber === totalQuestions ? 'See Results' : 'Next Question'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;