import React, { useMemo, useState } from 'react';
import Welcome from './WelcomePage';
import QuizPage from './QuizPage';
import questionsData from '../data/questions.json';

const initialState = {
  score: 0,
  questionIndex: 0,
  selectedAnswer: null,
  isCorrect: null,
  showWelcome: true,
  showResults: false,
};

const SectionPlaceholder = () => {
  const questions = useMemo(() => questionsData.questions, []);
  const [showWelcome, setShowWelcome] = useState(initialState.showWelcome);
  const [showResults, setShowResults] = useState(initialState.showResults);
  const [questionIndex, setQuestionIndex] = useState(initialState.questionIndex);
  const [score, setScore] = useState(initialState.score);
  const [selectedAnswer, setSelectedAnswer] = useState(initialState.selectedAnswer);
  const [isCorrect, setIsCorrect] = useState(initialState.isCorrect);

  const currentQuestion = questions[questionIndex];
  const isLastQuestion = questionIndex === questions.length - 1;

  const handleStartQuiz = () => {
    setShowWelcome(false);
    setShowResults(false);
    setQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const handleAnswerSelect = (option) => {
    if (selectedAnswer !== null) {
      return;
    }

    const correct = option === currentQuestion.answer;
    setSelectedAnswer(option);
    setIsCorrect(correct);

    if (correct) {
      setScore((previousScore) => previousScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setShowResults(true);
      return;
    }

    setQuestionIndex((previousIndex) => previousIndex + 1);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const handleRestart = () => {
    setShowWelcome(true);
    setShowResults(false);
    setQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  if (showWelcome) {
    return <Welcome onStart={handleStartQuiz} />;
  }

  if (showResults) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-violet-700 via-purple-600 to-fuchsia-500 px-4 py-10">
        <div className="w-full max-w-lg rounded-3xl bg-white/10 p-8 text-center text-white shadow-2xl backdrop-blur-sm">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-violet-100">Quiz Complete</p>
          <h2 className="mb-6 text-4xl font-black">You scored {score} / {questions.length}</h2>
          <p className="mb-8 text-lg text-violet-50">
            {score === questions.length
              ? 'Perfect! You nailed every question.'
              : score >= Math.ceil(questions.length / 2)
                ? 'Great work — you are on a strong streak.'
                : 'Nice effort — try again and beat your score!'}
          </p>

          <button
            type="button"
            onClick={handleRestart}
            className="rounded-full bg-white px-6 py-3 text-base font-bold text-violet-700 shadow-lg transition hover:bg-violet-50"
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <QuizPage
      question={currentQuestion}
      questionNumber={questionIndex + 1}
      totalQuestions={questions.length}
      score={score}
      onAnswer={handleAnswerSelect}
      selectedAnswer={selectedAnswer}
      isCorrect={isCorrect}
      onNextQuestion={handleNextQuestion}
    />
  );
};

export default SectionPlaceholder;
