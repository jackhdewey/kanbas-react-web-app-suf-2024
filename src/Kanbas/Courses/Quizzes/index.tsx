import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { ImBlocked } from "react-icons/im";
import { FaTrash } from "react-icons/fa"
import { FaRegEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

import QuizControls from "./QuizControls";
import { setQuizzes, deleteQuiz, updateQuiz } from "./reducer";
import * as client from "./client";

export default function Quizzes() {

    const { cid } = useParams();
    const dispatch = useDispatch();
    const fetchQuizzes = async () => {
        const quizzes = await client.findQuizzesForCourse(cid as string);
        console.log("QUIZZES FOUND: ", quizzes);
        dispatch(setQuizzes(quizzes));
    };
    useEffect(() => {
        console.log("Fetching Quizzes");
        fetchQuizzes();
    }, []);

    const { quizzes } = useSelector((state: any) => state.quizzesReducer);

    const removeQuiz = async (quizId: string) => {
        await client.deleteQuiz(quizId);
        dispatch(deleteQuiz(quizId));
    }

    const publishQuiz = async (quizId: string) => {
        let quiz = quizzes.find((a: any) => a._id === quizId);
        quiz = {...quiz, published: true};
        await client.updateQuiz(quiz);
        dispatch(updateQuiz(quiz));
    }

    const unPublishQuiz = async (quizId: string) => {
        let quiz = quizzes.find((a: any) => a._id === quizId);
        quiz = {...quiz, published: false};
        await client.updateQuiz(quiz);
        dispatch(updateQuiz(quiz));
    }

    return (
        <div id="wd-quizzes">

            {<QuizControls />}
            
            <br/><br/><br/>

            <ul id="wd-quizzes" className="list-group rounded-0">
                <li  className="wd-title list-group-item p-0 mb-5 fs-5 border-gray">

                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        QUIZZES
                    </div>

                    <ul className="wd-quizzes list-group rounded-0">
                        {quizzes && quizzes.filter((quiz: any) => quiz.course === cid)
                            .map((quiz: any) => (
                                <li className="wd-quiz list-group-item p-3 ps-1">
                                    <div className="row">

                                        <div className="col-1 text-nowrap">
                                            <BsGripVertical className="me-2 fs-3" />
                                        </div>

                                        <div className="col-10">
                                            <Link 
                                                key={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`} 
                                                to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`} 
                                                className="wd-quiz-link link-dark link-underline-light">
                                                {quiz.name}
                                            </Link>
                                            
                                            <br />

                                            <b> Available </b> 
                                            { /* quiz.date_available.split("-")[1] + " " */}
                                            { /* quiz.date_available.split("-")[2] */} |  
                                            <b> Due </b> 
                                            {quiz.due_date.split("-")[1] + " "} 
                                            {quiz.due_date.split("-")[2]} at 11:59pm |  
                                            {" " + quiz.points} pts |
                                            {" " + quiz.questions.length} Questions
                                        </div>

                                        <div className="col-1">
                                            <div className="float-end text-nowrap">
                                                
                                                {quiz.published ? 
                                                
                                                    <FaCheckCircle style={{ top: "2px "}} className="text-success me-1 fs-5" 
                                                    onClick={() => unPublishQuiz(quiz._id)}/>
                                                                
                                                                : 

                                                    <ImBlocked className="text-danger me-2" 
                                                                onClick={() => publishQuiz(quiz._id)}/>}

                                                <Link 
                                                    key={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`} 
                                                    to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`} 
                                                    className="wd-quiz-link link-dark link-underline-light">
                                                    <FaRegEdit className="text-success me-2 fs-3"/>
                                                </Link>
                                                
                                                <FaTrash className="text-danger me-2 mb-1"
                                                    onClick={() => {
                                                        const remove = window.confirm(`Remove quiz ${quiz._id}`)
                                                        if (remove) {
                                                            removeQuiz(quiz._id)}
                                                        }
                                                    }/>
                                                <IoEllipsisVertical className="fs-4" />
                                            </div>

                                        </div>

                                    </div>
                                </li>
                            )
                        )}
                    </ul>

                </li>
            </ul>

        </div>
    );
}