import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Quiz.module.css';
import questionsArray from '../../utils/questions';

const Quiz = ({ onScoreUpdate }) => {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState(questionsArray);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];

    // Updating the answers here
    if (selectedOption === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1);
    }

    // To update the selected option
    const updatedQuestions = questions.map((q, index) =>
      index === currentQuestionIndex ? { ...q, selectedOption } : q
    );

    setQuestions(updatedQuestions);

    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedOption(null); // Reset selection for the next question
    } else {
      // Routing to the result component
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
