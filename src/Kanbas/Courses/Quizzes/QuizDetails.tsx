import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaPencil } from "react-icons/fa6";
import { addQuiz, updateQuiz } from "./reducer";
import * as client from "./client";

export default function QuizDetails() {

    const { cid, qid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    
    let quiz = quizzes.find((a: any) => a._id === qid);
    let isNew = false;
    if (!quiz) {
        isNew = true;
        quiz = {
            "_id": qid,
            "name": "New Quiz",    
            "quiz_type": "GRADED",
            "group": "QUIZZES",
            "shuffle_answers": "NO",
            "multiple_attempts": "NO",
            "num_attempts": 1,
            "course": cid, 
            "date_available": "2024-06-24", 
            "due_date":"2024-06-24", 
            "points":"100", 
            "description":"a test of your knowledge"
        }
    }
    const [ a, updateA ] = useState<any>(quiz);

    const dispatch = useDispatch();
    const newQuiz = async (quiz: any) => {
        const newQuiz = await client.createQuiz(cid as string, quiz);
        dispatch(addQuiz(newQuiz));
    }

    return (

        <div id="wd-quiz-details">

            <div className="clearfix text-center">
                <Link 
                    to={`/Kanbas/Courses/${cid}/Quizzes`} 
                    type="button" 
                    id="wd-preview" 
                    className="btn btn-secondary float-middle me-2" >
                    Preview
                </Link>  

                <Link 
                    to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Editor`} 
                    type="button" 
                    id="wd-edit" 
                    className="btn btn-secondary float-middle" >
                    <FaPencil className="position-relative me-2"/>
                    Edit
                </Link>

            </div>

            <hr />

            <h4>{quiz.name}</h4>

            <div className="row justify-content-end">
                <div className="col-3">
                    <span className="float-end"><b>Quiz Type</b></span>
                </div>
                
                <div className="col-5">
                    {quiz.quiz_type}
                </div>
            </div>
       
            <div className="row justify-content-end">
                <div className="col-3">
                    <span className="float-end"><b>Points</b></span>
                </div>
                
                <div className="col-5">
                    {a && a.points}
                </div>
            </div>

            <div className="row justify-content-end">
                <div className="col-3">
                    <span className="float-end"><b>Assignment Group</b></span>
                </div>
                
                <div className="col-5">
                    {quiz.group}
                </div>
            </div>

            <div className="row justify-content-end">
               
                <div className="col-3">
                    <span className="float-end"><b>Shuffle Answers</b></span>
                </div>
        
                <div className="col-5">
                    {quiz.shuffle_answers}
                </div>

            </div>

            <div className="row justify-content-end">
                
                <div className="col-3">
                    <span className="float-end"><b>Time Limit</b></span>
                </div>
        
                <div className="col-5">
                    {quiz.time_limit} Minutes
                </div>

            </div>

            <div className="row justify-content-end">
                
                <div className="col-3">
                    <span className="float-end"><b>Multiple Attempts</b></span>
                </div>
        
                <div className="col-5">
                    {quiz.multiple_attempts}
                </div>

            </div>

            <div className="row justify-content-end">
                
                <div className="col-3">
                    <span className="float-end"><b>How Many Attempts</b></span>
                </div>
        
                <div className="col-5">
                    {quiz.num_attempts}
                </div>

            </div>

            <div className="row justify-content-end">
                
                <div className="col-3">
                    <span className="float-end"><b>How Many Attempts</b></span>
                </div>
        
                <div className="col-5">
                    {quiz.show_answers}
                </div>

            </div>

            <div className="row justify-content-end">
                
                <div className="col-3">
                    <span className="float-end"><b>Access Code</b></span>
                </div>
        
                <div className="col-5">
                    {quiz.access_code}
                </div>

            </div>

            <div className="row justify-content-end">
                
                <div className="col-4">
                    <span className="float-end"><b>One Question at a Time</b></span>
                </div>
        
                <div className="col-5">
                    {quiz.one_question_at_a_time}
                </div>

            </div>

            <div className="row justify-content-end">
                
                <div className="col-3">
                    <span className="float-end"><b>Webcam Required</b></span>
                </div>
        
                <div className="col-5">
                    {quiz.webcam}
                </div>

            </div>

            <div className="row justify-content-end">
               
                <div className="col-5">
                    <span className="float-end"><b>Lock Questions After Answering</b></span>
                </div>
        
                <div className="col-5">
                    {quiz.lock_after_answering}
                </div>

            </div>

            <div className="row justify-content-end">
                
                <div className="col-3">
                    <span className="float-end"><b>Due Date</b></span>
                </div>
        
                <div className="col-5">
                    {quiz.due_date}
                </div>

            </div>

            <div className="row justify-content-end">
                
                <div className="col-3">
                    <span className="float-end"><b>Available Date</b></span>
                </div>
        
                <div className="col-5">
                    {quiz.date_available}
                </div>

            </div>

            <div className="row justify-content-end">
                
                <div className="col-3">
                    <span className="float-end"><b>Until Date</b></span>
                </div>
        
                <div className="col-5">
                    {quiz.available_until}
                </div>

            </div>
                
            <hr />

        </div>
    );
}