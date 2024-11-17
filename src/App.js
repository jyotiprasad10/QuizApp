// App.js
import React from 'react';
import QuizApp from './QuizApp/QuizApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to the Test Platform</h1>
      </header>
      {/* Using QuizApp component to route instead of dircetly using App.js */}
      <QuizApp />
      
      <footer>
        <p>&copy; 2024 Test Platform</p>
      </footer>
    </div>
  );
}

export default App;