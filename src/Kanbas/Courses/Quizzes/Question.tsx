import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { FaPlus } from "react-icons/fa";

import MCQuestion from "./MCQuestion";
import TFQuestion from "./TFQuestion";
import FillQuestion from "./FillQuestion";
import * as client from "./client";

export default function Question({activeQuestion, setQuestions} : { activeQuestion: any, setQuestions:(questions: any[]) => void}) {

    const { cid, qid, qsid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    let quiz = quizzes.find((a: any) => a._id === qid);
    let question1 = quiz.questions.find((a: any) => a._id === qsid);
    const [ question, setQuestion ] = useState(question1);

    const updateQuestion = async (question: any) => {
        quiz.questions.filter((a: any) => a._id !== question.id);
        const newQuestions = [...quiz.questions, question];
        setQuestions(newQuestions);
        await client.updateQuiz({...quiz, questions: newQuestions});
    };

    return (
        <div className="container">

            <div className="row mb-2">
                <input className="form-control w-25 me-2" value={question.name}
                        onChange={(e) => setQuestion({...question, name: e.target.value})}></input>
                <select className="form-select w-25 me-2"
                        onChange={(e) => setQuestion({...question, type: e.target.value})}>
                    <option value="MC">Multiple Choice</option>
                    <option value="TF">True/False</option>
                    <option value="FB">Fill in the Blank</option>
                </select>
                <input className="form-control w-25" type="number" value={question.points}
                        onChange={(e) => setQuestion({...question, points: e.target.value})}></input>
            </div>

            <div className="row">
                <h4>Question:</h4>
                <textarea className="form-control w-75 me-2" cols={50} rows={9}
                            value={question.question}
                            onChange={(e) => setQuestion({...question, question: e.target.value})}></textarea>
            </div>
     
            <hr />

            {question.type==="MC" && <MCQuestion setQuestion={setQuestion}/>}

            <button className="btn btn-warning" onClick={updateQuestion}>
                Save Question
            </button>


        </div>
    );
}