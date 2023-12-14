import React, { useState, useEffect } from "react";
import "./CountryQuiz.css";

const quizQuestions = [
  // ... (your quiz questions)
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    question: "What is the capital of Pakistan?",
    options: ["Islamabad", "Dehli", "Lahore"],
    answer: "Islamabad",
  },

  {
    question: "What is the capital of the USA?",
    options: ["Washington D.C.", "New York", "Los Angeles"],
    answer: "Washington D.C.",
  },
  {
    question: "What is the capital of the Netherlands?",
    options: ["Amsterdam", "Rotterdam", "The Hague"],
    answer: "Amsterdam",
  },
  {
    question: "What is the capital of Spain?",
    options: ["Madrid", "Barcelona", "Valencia"],
    answer: "Madrid",
  },
  {
    question: "What is the capital of Turkey?",
    options: ["Ankara", "Istanbul", "Izmir"],
    answer: "Ankara",
  },
  {
    question: "What is the capital of Portugal?",
    options: ["Lisbon", "Porto", "Faro"],
    answer: "Lisbon",
  },
  {
    question: "What is the capital of Slovenia?",
    options: ["Ljubljana", "Maribor", "Koper"],
    answer: "Ljubljana",
  },
  {
    question: "What is the capital of Colombia?",
    options: ["Bogotá", "Medellín", "Cali"],
    answer: "Bogotá",
  },
];
const shuffleArray = (array) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const CountryQuiz = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState(() =>
    shuffleArray([...quizQuestions])
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => {
    return parseInt(localStorage.getItem("currentQuestionIndex") || 0, 10);
  });
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(() => {
    return parseInt(localStorage.getItem("score") || 0, 10);
  });
  const [feedback, setFeedback] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    localStorage.setItem(
      "currentQuestionIndex",
      currentQuestionIndex.toString()
    );
    localStorage.setItem("score", score.toString());

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentQuestionIndex, score, timeoutId]);

  const handleOptionClick = (option) => {
    if (feedback === "") {
      setSelectedOption(option);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setFeedback("");
    }
  };

  const handleNextQuestion = () => {
    if (feedback === "") {
      if (selectedOption === shuffledQuestions[currentQuestionIndex].answer) {
        setScore((prevScore) => prevScore + 1);
        setFeedback("Correct!");
      } else {
        setFeedback(
          "Incorrect. The correct answer was: " +
            shuffledQuestions[currentQuestionIndex].answer
        );
      }

      const newTimeoutId = setTimeout(() => {
        setFeedback("");
        setSelectedOption("");
        if (currentQuestionIndex < shuffledQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setCurrentQuestionIndex(0);
          setScore(0);
          localStorage.removeItem("currentQuestionIndex");
          localStorage.removeItem("score");
        }
      }, 2000);

      setTimeoutId(newTimeoutId);
    }
  };

  const progress =
    ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
  const scorePercentage = (score / shuffledQuestions.length) * 100;

  return (
    <div className="quiz-container">
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      {currentQuestionIndex < shuffledQuestions.length ? (
        <>
          <h2>{shuffledQuestions[currentQuestionIndex].question}</h2>
          <div className="answer-button">
            {shuffledQuestions[currentQuestionIndex].options.map((option) => (
              <button
                className="quiz-button"
                key={option}
                onClick={() => handleOptionClick(option)}
                disabled={feedback !== "" || selectedOption === option}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="prev-next-button">
            <button
              className="quiz-button"
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              className="quiz-button"
              onClick={handleNextQuestion}
              disabled={selectedOption === ""}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p>Quiz completed! Your score: {score}</p>
      )}
      <p>{feedback}</p>
      <div className="score-bar" style={{ width: `${scorePercentage}%` }}></div>
    </div>
  );
};

export default CountryQuiz;
