import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Result.module.css';

const Result = ({ score, questions }) => {
  const navigate = useNavigate();
  const totalQuestions = questions.length;

  const handleRetakeQuiz = () => {
    navigate('/');
  };

  return (
    <div className={styles.resultContainer}>
      <h2 className={styles.title}>Quiz Results</h2>
      <p className={styles.score}>
        You scored {score} out of {totalQuestions}.
      </p>
      <p className={styles.resultText}>
        {score >= Math.ceil(totalQuestions * 0.7) ? 'Congratulations! You passed.' : 'Better luck next time.'}
      </p>
      
      {/* Detailed feedback for each question */}
      <div className={styles.feedbackContainer}>
        {questions.map((question, index) => (
          <div key={index} className={styles.questionFeedback}>
            <p className={styles.questionText}>
              <strong>Question {index + 1}:</strong> {question.question}
            </p>
            <p className={`${styles.answerText} ${question.selectedOption === question.answer ? styles.correct : styles.incorrect}`}>
              Your Answer: {question.selectedOption || 'No answer selected'}
            </p>
            {question.selectedOption !== question.answer && (
              <p className={styles.explanationText}>
                Correct Answer: {question.answer}. {question.explanation}
              </p>
            )}
          </div>
        ))}
      </div>
      
      <button className={styles.retakeButton} onClick={handleRetakeQuiz}>Retake Quiz</button>
    </div>
  );
};

export default Result;
