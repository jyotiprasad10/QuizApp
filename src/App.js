// App.js
import React from 'react';
import QuizApp from './QuizApp/QuizApp';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to the Test Platform</h1>
      </header>
      
      {/* Main Application Routing */}
      <QuizApp />
      
      <footer>
        <p>&copy; 2024 Test Platform</p>
      </footer>
    </div>
  );
}

export default App;