// This is the main component for the quiz. It will render the question and answer components.

import Question from "./question";
import { useContext, useEffect} from "react";
import { QuizContext } from "../context/QuizContext";

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const apiUrl = 'https://opentdb.com/api.php?amount=10&category=31&type=multiple';

    useEffect(() => {
        if (quizState.questions.length > 0 || quizState.error) {
            return;
        }
        // Fetch questions from the API and update the state with the questions and answers.
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                console.log("data", data);
                // Dispatch the action the reducer expects
                dispatch({ type: 'Load Questions', payload: data.results });
            })
            .catch((err) => {
                console.error('err', err.message)
                dispatch({ type: 'Error', payload: err.message });
            });
    });

    return (
        <div className="quiz">
            {quizState.error && (
                <div className="results">
                    <div className="congratulations">Error</div>
                    <div className="results-info">
                        <div>{quizState.error}</div>
                    </div>
                </div>
            )}
            {quizState.showResults && (
                <div className="results">
                    <div className="congratulations">Congratulations!</div>
                    <div className="results-info">
                        <div>You have completed the quiz.</div> 
                        <div>Your score is {quizState.correctAnswerCount} out of {quizState.questions.length}.</div>
                    </div>
                    <div 
                        className="next-button" 
                        onClick={() => dispatch({ type: 'Restart Quiz' })}>
                        Restart Quiz
                    </div>
                </div>
            )}
           {!quizState.showResults && quizState.questions.length > 0 && (<div>
                <div className="score">
                    Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}
                </div>
                <Question />
                <div 
                    className="next-button" 
                    onClick={() => dispatch({ type: 'Next Question' })}
                >
                    Next Question
                </div>
            </div>
            )}
        </div>
    );
};

export default Quiz;