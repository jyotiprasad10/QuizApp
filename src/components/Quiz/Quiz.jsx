import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Quiz.module.css';

const Quiz = ({ onScoreUpdate }) => {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris", explanation: "Paris is the capital city of France.", selectedOption: null },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4", explanation: "2 + 2 equals 4.", selectedOption: null },
    { question: "What color is the sky?", options: ["Blue", "Green", "Red", "Yellow"], answer: "Blue", explanation: "On a clear day, the sky appears blue due to Rayleigh scattering.", selectedOption: null },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];

    // Check answer and update score if correct
    if (selectedOption === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1);
    }

    // Update the selected option in the current question
    const updatedQuestions = questions.map((q, index) =>
      index === currentQuestionIndex ? { ...q, selectedOption } : q
    );

    setQuestions(updatedQuestions);

    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedOption(null); // Reset selection for the next question
    } else {
      // Final question reached: update parent component and navigate to result page
      onScoreUpdate(score + (selectedOption === currentQuestion.answer ? 1 : 0), updatedQuestions);
      navigate("/result");
    }
  };

  return (
    <div className={styles.quizContainer}>
      <div className={styles.question}>
        {questions[currentQuestionIndex].question}
      </div>
      <div className={styles.options}>
        {questions[currentQuestionIndex].options.map((option) => (
          <button
            key={option}
            className={`${styles.optionButton} ${selectedOption === option ? styles.selected : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button className={styles.submitButton} onClick={handleSubmit}>
        {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
      </button>
    </div>
  );
};

export default Quiz;
