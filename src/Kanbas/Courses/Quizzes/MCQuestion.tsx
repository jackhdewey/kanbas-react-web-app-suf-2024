import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function MCQuestion() {

    const { cid, qid, qid2 } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    let quiz = quizzes.find((a: any) => a._id === qid);
    let question = quiz.questions.find((a: any) => a._id === qid);

    const [ answers, setAnswers ] = useState(
        [
            { 
                value: 10,
            }
        ]
    );
    const addAnswer = () => {
        
    };

    return (
        <div className="container">

            <div className="row mb-2">
                <input className="form-control w-25 me-2" value="Easy Question"></input>
                <select className="form-select w-25 me-2">
                    <option>Multiple Choice</option>
                    <option>True/False</option>
                    <option>Fill in the Blank</option>
                </select>
                <input className="form-control w-25" type="number" value="10"></input>
            </div>

            <div className="row">
                <h4>Question:</h4>
                <textarea className="form-control w-75 me-2" cols={50} rows={9}></textarea>
            </div>

            <div className="row">
                <h4>Answers:</h4>
                <ul className="wd-quizzes list-group rounded-0">
                    {answers && answers.map((answer) => (
                        <li className="wd-quiz list-group-item p-3 ps-1">
                            <div className="row">
                                <input className="form-control w-25 me-2" value={answer.value}/>
                            </div> 
                        </li>
                    ))}  
                </ul>
            </div>

            <hr />

            <button id="wd-add-quiz" className="btn btn-lg btn-secondary me-1 w-25"
                    onClick={addAnswer}>
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                New Answer
            </button>

        </div>
    );
}