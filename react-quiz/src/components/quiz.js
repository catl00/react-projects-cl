// This is the main component for the quiz. It will render the question and answer components.

import Question from "./question";
import { useContext} from "react";
import { QuizContext } from "../context/QuizContext";

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div className="quiz">
            {quizState.showResults && (
                <div className="results">
                    <div className="congratulations">Congratulations!</div>
                    <div className="results-info">
                        <div>You have completed the quiz.</div> 
                        <div>Your score is {quizState.correctAnswerCount} out of {quizState.questions.length}.</div>
                    </div>
                    <div 
                        className="next-button" 
                        onClick={() => dispatch({type: 'RESTART_QUIZ'})}>
                        Restart Quiz
                    </div>
                </div>
            )}
           {!quizState.showResults && (<div>
                <div className="score">
                    Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}
                </div>
                <Question />
                <div 
                    className="next-button" 
                    onClick={() => dispatch({type: 'NEXT_QUESTION'})}
                >
                    Next Question
                </div>
            </div>
            )}
        </div>
    );
};

export default Quiz;