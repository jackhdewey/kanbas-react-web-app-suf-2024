import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";

//import AssignmentControls from "./AssignmentControls";
//import AssignmentControlButtons from "./AssignmentControlButtons";
import { setQuizzes, deleteQuiz } from "./reducer";
import * as client from "./client";
//import "./index.css"

export default function Quizzes() {

    const { cid } = useParams();
    const dispatch = useDispatch();
    const fetchQuizzes = async () => {
        const quizzes = await client.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
    };
    useEffect(() => {
        fetchQuizzes();
        console.log("Fetching Quizzes");
    }, []);

    const [ quizzes, setQuizzes1 ] = useState<any[]>([]); 
    //const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    //console.log(quizzes);

    const removeQuiz = async (quizId: string) => {
        console.log(quizId);
        await client.deleteQuiz(quizId);
        dispatch(deleteQuiz(quizId));
    }

    return (
        <div id="wd-quizzes">

            { /* cid && <QuizControls cid={cid} /> */ }
            
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
                                            <FaRegEdit className="text-success me-2 fs-3"/>
                                        </div>

                                        <div className="col-10">
                                            <Link 
                                                key={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`} 
                                                to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`} 
                                                className="wd-quiz-link link-dark link-underline-light">
                                                {quiz.title}
                                            </Link>
                                            
                                            <br />

                                            <span className="text-danger">Multiple Modules </span> 
                                            | <b>Not available until </b> 
                                            {quiz.date_available.split("-")[1] + " "}
                                            {quiz.date_available.split("-")[2]} at 12:00am | <b>Due </b> 
                                            {quiz.due_date.split("-")[1] + " "} 
                                            {quiz.due_date.split("-")[2]} at 11:59pm | 
                                            {quiz.points} pts
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

                </li>
            </ul>

        </div>
    );
}