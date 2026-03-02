import React from 'react';
import ReactDOM from 'react-dom/client';
import Quiz from './components/quiz.js';
import { QuizProvider } from './context/QuizContext.js';
import './index.css';

// Use ReactDOM.createRoot to create a root and then call the render method on it.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QuizProvider>
      <Quiz />
    </QuizProvider>
);