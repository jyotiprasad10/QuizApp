import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './QuizApp.module.css'
import Quiz from '../components/Quiz/Quiz';
import Result from '../components/Result/Result';

function QuizApp() {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);

  // Callback function to update the score dynamically
  const handleScoreUpdate = (finalScore, questionsWithAnswers) => {
    setScore(finalScore);
    setQuestions(questionsWithAnswers);
  };
  return (
    <div className= {styles.quizAppContainer}>
      <Router>
        <Routes>
        <Route path="/" element={<Quiz onScoreUpdate={handleScoreUpdate} />} />
          <Route path="/result" element={<Result score={score} questions={questions}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default QuizApp;
