import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { FaPlus } from "react-icons/fa";

import MCQuestion from "./MCQuestion";
import TFQuestion from "./TFQuestion";
import FillQuestion from "./FillQuestion";

export default function Question() {

    const { cid, qid, qsid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    let quiz = quizzes.find((a: any) => a._id === qid);
    let question = quiz.questions.find((a: any) => a._id === qid);

    const [ qtype, setQtype ] = useState("MC");

    return (
        <div className="container">

            <div className="row mb-2">
                <input className="form-control w-25 me-2" value="Easy Question"></input>
                <select className="form-select w-25 me-2"
                        onChange={(e) => setQtype(e.target.value)}>
                    <option value="MC">Multiple Choice</option>
                    <option value="TF">True/False</option>
                    <option value="FB">Fill in the Blank</option>
                </select>
                <input className="form-control w-25" type="number" value="10"></input>
            </div>

            <div className="row">
                <h4>Question:</h4>
                <textarea className="form-control w-75 me-2" cols={50} rows={9}></textarea>
            </div>
     
            <hr />

            {qtype==="MC" && <MCQuestion />}

        </div>
    );
}