import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function MCQuestion() {

    const { cid, qid, qid2 } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    let quiz = quizzes.find((a: any) => a._id === qid);
    let question = quiz.questions.find((a: any) => a._id === qid);
    const [ answers, setAnswers ] = useState(question.answers);
    console.log(answers);

    const addAnswer = () => {
        let newAnswers = [...answers, {value: 1, correct: false}]; 
        setAnswers(newAnswers);
    };

    const updateAnswer = (answer: any) => { 
        setAnswers([...answers, answer]);
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
                {answers && answers.map((answer: any, i: number) => ( 
                    <li className="row list-group-item">
                        <label htmlFor={`answer-${i}`}>
                            <input type="radio" name="answers" className="form-check-input" checked={answer.correct} onChange={() => {answer.correct=!answer.correct}} ></input>
                        </label>
                        <input id={`answer-${i}`} className="form-control" value={answer.value} onChange={(e) => {}}/>  
                    </li> 
                ))}  
            </ul>

        </div>
    );
}