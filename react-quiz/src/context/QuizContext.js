import { createContext, useReducer } from "react";
import questions from "../data.js";
import { shuffleAnswers } from "../helpers.js";

//Using as useReducer instead of useState to manage the state of the quiz. 
//This will allow us to easily update the state of the quiz and keep track of the current question index and score.
const initialState = {
    currentQuestionIndex: 0,
    questions,
    showResults: false,
    answers: shuffleAnswers(questions[0]),
    currentAnswer: null,
    correctAnswerCount: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SELECT_ANSWER": {
            const correctAnswersCount = 
                action.payload === 
                state.questions[state.currentQuestionIndex].correctAnswer 
                    ? state.correctAnswerCount + 1 
                    : state.correctAnswerCount;
            return {
                ...state,
                currentAnswer: action.payload,
                correctAnswersCount,
            };
        }
        case "Next Question": {
            const showResults = state.currentQuestionIndex === state.questions.length - 1;
            const currentQuestionIndex = showResults 
                ? state.currentQuestionIndex 
                : state.currentQuestionIndex + 1;
            const answers = showResults 
                ? [] 
                : shuffleAnswers(state.questions[currentQuestionIndex]);
            return {
                ...state, 
                currentQuestionIndex, 
                showResults,
                answers,
                currentAnswer: null,
            };
        }
        case "Restart Quiz": {
            return initialState;
        }
        default: {
            return state;
        }
    }
};


export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(reducer, initialState);
    return (
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    );
};