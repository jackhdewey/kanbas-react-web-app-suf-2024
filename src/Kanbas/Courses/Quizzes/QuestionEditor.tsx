import { useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { addQuiz, updateQuiz } from "./reducer";
import * as client from "./client";
import { BsGripVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import MCQuestion from "./MCQuestion";
import TOC from "./TOC";

export default function QuestionEditor() {
    
    const { cid, qid, qid2 } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    let quiz = quizzes.find((a: any) => a._id === qid);

    const [questions, setQuestions ] = useState(quiz.questions);
    const addQuestion = () => {
        const newQuestion = {
            name: "Easy Question",
            type: "Multiple Choice",
            points: 10,
            question: "",
            answers: []
        }
        setQuestions([...questions, newQuestion]);
    };

    const [ q, updateQ ] = useState<any>(quiz);

    const dispatch = useDispatch();
    const saveQuiz = async (quiz: any) => {
        await client.updateQuiz(quiz)
        dispatch(updateQuiz(quiz));
    }

    return (
        <div >

            <TOC />

            <hr />
            
            <div className="text-center">
                <button id="wd-add-quiz" className="btn btn-lg btn-secondary me-1"
                    onClick={addQuestion}>
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    New Question
                </button>
            </div>

            <hr />

            <MCQuestion />

            <hr />

            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                QUESTIONS
            </div>

            <ul className="wd-quizzes list-group rounded-0">
                {quiz && questions.filter((quiz: any) => quiz.course === cid).map((quiz: any) => (
                    <li className="wd-quiz list-group-item p-3 ps-1">
                        <div className="row">

                            <div className="col-1 text-nowrap">
                                <BsGripVertical className="me-2 fs-3" />
                                <FaRegEdit className="text-success me-2 fs-3"/>
                            </div>

                            <div className="col-10">
                                 
                                {quiz.name}
                      
                                <br />

                                <b> Available </b> 
                                {quiz.date_available.split("-")[1] + " "}
                                {quiz.date_available.split("-")[2]} at 12:00am |  <b> Due </b> 
                                {quiz.due_date.split("-")[1] + " "} 
                                {quiz.due_date.split("-")[2]} at 11:59pm |  
                                {" " + quiz.points} pts
                            </div>
                                    
                            <div className="col-1">
                                { /* <QuizControlButtons 
                                    aid={quiz._id} 
                                    deleteQuiz={removeQuiz}/>  */}  
                            </div>

                        </div>
                    </li>
                    )
                )}
            </ul>

            <hr />

            <div className="float-end">

                <Link 
                    to={`/Kanbas/Courses/${cid}/Quizzes`} 
                    type="button" 
                    id="wd-save" 
                    className="btn btn-danger float-center me-2" 
                    onClick={ () => saveQuiz(q) } >
                    Save and Publish
                </Link>  

                <Link 
                    to={`/Kanbas/Courses/${cid}/Quizzes`} 
                    type="button" 
                    id="wd-save" 
                    className="btn btn-warning float-center me-2" 
                    onClick={ () => saveQuiz(q) } >
                    Save
                </Link>  

                <Link 
                    to={`/Kanbas/Courses/${cid}/Quizzes`} 
                    type="button" 
                    id="wd-cancel" 
                    className="btn btn-secondary float-center" >
                    Cancel
                </Link>

            </div>

        </div>
    );
};