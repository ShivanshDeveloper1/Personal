"use client";

import { useState } from "react";
import QuizBoard from "./(Prediction)/QuizBoard";
import ResultPage from "./(Prediction)/(Result)/ResultPredicoter";


export default function QuizContainer() {
  const [quizFinished, setQuizFinished] = useState(false);
  const [finalAnswers, setFinalAnswers] = useState(null);

  // This function is called when the last question is submitted
  const handleQuizComplete = (answers) => {
    setFinalAnswers(answers);
    setQuizFinished(true); // Switches UI from Quiz to Result instantly
  };

  const handleReset = () => {
    setFinalAnswers(null);
    setQuizFinished(false);
  };

  return (
    <div className="min-h-screen bg-[#070514]">
      {!quizFinished ? (
        <QuizBoard onComplete={handleQuizComplete} />
      ) : (
        <ResultPage answers={finalAnswers} onReset={handleReset} />
      )}
    </div>
  );
}