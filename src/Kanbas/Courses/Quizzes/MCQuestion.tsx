import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function MCQuestion({question, setQuestion} : 
    {   question: any,
        setQuestion: (question: any) => void }) {

    //const { qid } = useParams();
    //const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    //let quiz = quizzes.find((a: any) => a._id === qid);

    const addAnswer = (answer: any) => {
        const newAnswers = [...question.answers, answer]; 
        setQuestion({...question, answers: newAnswers});
    };

    const updateAnswer = (answer: any) => {

    }

    const deleteAnswer = (answer: any) => {

    }

    return (
        <div className="row">

            <h4>Answers:</h4>

            <button id="wd-add-quiz" className="btn btn-lg btn-secondary me-1 w-25"
                    onClick={addAnswer}>
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                New Answer
            </button>

            <ul className="wd-quizzes list-group rounded-0 w-75 m-2">
                {question.answers && question.answers.map((answer: any, i: number) => ( 
                    <li className="row list-group-item">

                        <label htmlFor={`answer-${i}`}>
                            <input type="radio" name="answers"      
                                    className="form-check-input"     
                                    checked={answer.correct} 
                                    onChange={(e) => {
                                        const newAnswer = {...answer, correct: e.target.value};
                                        addAnswer(newAnswer);
                                    }}>
                            </input>
                        </label>

                        <input id={`answer-${i}`} className="form-control" 
                            value={answer.value} onChange={(e) => {
                                const newAnswer = {...answer, value: e.target.value};
                                addAnswer(newAnswer);
                            }}>
                        </input>  

                        <FaTrash className="text-danger me-2 mb-1"
                                onClick={() => {
                                const remove = window.confirm(`Remove question ${question.id}`)
                                    if (remove) {
                                        deleteAnswer(question.id)};
                                    }
                                }/>
                    </li> 
                ))}  
            </ul>

        </div>
    );
}