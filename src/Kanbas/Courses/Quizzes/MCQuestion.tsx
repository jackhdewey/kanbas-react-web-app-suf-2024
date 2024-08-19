import { useEffect, useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";


export default function MCQuestion({ question, setQuestion } : 
    {   question: any,
        setQuestion: (question: any) => void }) {

    const [ answers, setAnswers ] = useState(question.answers);

    useEffect(() => {
        setAnswers(question.answers);
    }, [])

    const addAnswer = () => {
        const newAnswer = {
            id: new Date().getTime().toString(),
            value: 0,
            correct: false,
        }
        console.log(newAnswer.id);
        const newAnswers = [...question.answers, newAnswer]; 
        setAnswers(newAnswers);
        setQuestion({...question, answers: newAnswers});
    };

    const updateAnswer = (answer: any) => {
        console.log(answer.id);
        const updatedAnswers = question.answers.filter((a: any) => a.id !== answer.id);
        const newAnswers = [...updatedAnswers, answer]; 
        setAnswers(newAnswers);
        setQuestion({...question, answers: newAnswers});
    }

    const deleteAnswer = (answer: any) => {
        console.log(answer.id);
        const updatedAnswers = question.answers.filter((a: any) => a.id !== answer.id); 
        setAnswers(updatedAnswers);
        setQuestion({...question, answers: updatedAnswers});
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
                {answers.map((answer: any, i: number) => ( 
                    <li className="row list-group-item">

                        <label htmlFor={`answer-${i}`}>
                            <input type="radio" name="answers"      
                                    className="form-check-input"     
                                    checked={answer.correct} 
                                    onChange={(e) => {
                                        const newAnswer = {...answer, correct: e.target.value};
                                        updateAnswer(newAnswer);
                                    }}>
                            </input>
                        </label>

                        <input id={`answer-${i}`} className="form-control" 
                            value={answer.value} onChange={(e) => {
                                const newAnswer = {...answer, value: e.target.value};
                                updateAnswer(newAnswer);
                            }}>
                        </input>  

                        <FaTrash className="text-danger me-2 mb-1"
                                onClick={() => {
                                const remove = window.confirm(`Remove question ${question.id}`)
                                    if (remove) {
                                        deleteAnswer(answer)};
                                    }
                                }/>
                    </li> 
                ))}  
            </ul>

        </div>
    );
}