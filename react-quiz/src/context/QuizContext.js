import { createContext, useReducer } from "react";
import { shuffleAnswers, normalizeQuestions} from "../helpers.js";

//Using as useReducer instead of useState to manage the state of the quiz. 
//This will allow us to easily update the state of the quiz and keep track of the current question index and score.
const initialState = {
    currentQuestionIndex: 0,
    questions: [],
    showResults: false,
    answers: [],
    currentAnswer: null,
    correctAnswerCount: 0,
    error: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SELECT_ANSWER": {
            const correctAnswerCount =
                action.payload ===
                state.questions[state.currentQuestionIndex].correctAnswer
                    ? state.correctAnswerCount + 1
                    : state.correctAnswerCount;
            return {
                ...state,
                currentAnswer: action.payload,
                correctAnswerCount,
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
        case "Load Questions": {
            const normalizedQuestions = normalizeQuestions(action.payload);
            return {
                ...state,
                questions: normalizedQuestions,
                answers: shuffleAnswers(normalizedQuestions[0]),
            };
        }
        case "Error": {
            return {
                ...state,
                error: action.payload,
            };
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