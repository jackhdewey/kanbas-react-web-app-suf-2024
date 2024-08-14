import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addQuiz, updateQuiz } from "./reducer";
import * as client from "./client";
import TOC from "./TOC";

export default function DetailEditor() {

    const { cid, qid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    let quiz = quizzes.find((a: any) => a._id === qid);
    const [ q, updateQ ] = useState<any>(quiz);

    const dispatch = useDispatch();
    const saveQuiz = async (quiz: any) => {
        await client.updateQuiz(quiz)
        dispatch(updateQuiz(quiz));
    }

    return (
        <div id="wd-detail-editor">
        
            <TOC />

            <input id="wd-name" className="form-control" 
                    value={q &&`${q.name}`} onChange={(e) => updateQ({...q, name: e.target.value})} /><br />

            <h4>Quiz Instructions</h4>
            <textarea id="wd-description" className="form-control" cols={50} rows={9}
                        value={q.description} onChange={(e) => updateQ({...q, description: e.target.value})} >
                {q && q.description}
            </textarea><br />

            <div className="row justify-content-center">
                <div className="col-2 text-end">
                    <label htmlFor="wd-group form-label">Quiz Type</label>
                </div>
                
                <div className="col-3">
                    <select id="wd-group" className="form-select">
                        <option value="GRADED">Graded Quiz</option>
                        <option value="PRACTICE">Practice Quiz</option>
                        <option value="GRADED SURVEY">Graded Survey</option>
                        <option value="UNGRADED SURVEY">Ungraded Survey</option>
                    </select>
                </div>
            </div><br />

            <div className="row justify-content-center">
                <div className="col-2 text-end">
                    <label htmlFor="wd-group form-label">Assignment Group</label>
                </div>
                
                <div className="col-3">
                    <select id="wd-group" className="form-select">
                        <option value="QUIZZES">Quizzes</option>
                        <option value="EXAMS">Exams</option>
                        <option value="ASSIGNMENTS">Assignments</option>
                        <option value="PROJECT">Project</option>
                    </select>
                </div>
            </div><br />

            <div className="row justify-content-center">

                <div className="col-2 text-end">
                    <label htmlFor="wd-points" className="form-label">Points</label>
                </div>

                <div className="col-3">
                    <input id="wd-points" className="form-control" 
                            value={q && q.points} onChange={(e) => updateQ({...q, points: e.target.value})}/>
                </div>

            </div><br />

            <div className="row justify-content-center">
            
                <div className="col-2 text-end">
                    <label htmlFor="wd-display-grade-as" className="form-label">Shuffle Answers</label>
                </div>

                <div className="col-3">
                    <select id="wd-display-grade-as" className="form-select">
                        <option value="YES" selected>Yes</option>
                        <option value="NO">No</option>
                    </select>
                </div>

            </div><br />

            <div className="row justify-content-center">
            
            <div className="col-2 text-end">
                <label htmlFor="wd-display-grade-as" className="form-label">Time Limit</label>
            </div>

            <div className="col-3">
                <input id="wd-display-grade-as" className="form-control" type="number" value={quiz.time_limit}
                onChange={(e) => updateQ({...q, time_limit: e.target.value})}></input>
            </div>

        </div><br />

        <div className="row justify-content-center">
            
            <div className="col-2 text-end">
                <label htmlFor="wd-display-grade-as" className="form-label">Multiple Attempts</label>
            </div>

            <div className="col-3">
                <select id="wd-display-grade-as" className="form-select">
                    <option value="YES">Yes</option>
                    <option value="NO" selected>No</option>
                </select>
            </div>

        </div><br />

        <div className="row justify-content-center">
            
            <div className="col-2 text-end">
                <label htmlFor="wd-display-grade-as" className="form-label">Show Correct Answers</label>
            </div>

            <div className="col-3">
                <select id="wd-display-grade-as" className="form-select">
                    <option value="YES" selected>Yes</option>
                    <option value="NO">No</option>
                </select>
            </div>

        </div><br />

        <div className="row justify-content-center">
            
            <div className="col-2 text-end">
                <label htmlFor="wd-display-grade-as" className="form-label">Access Code</label>
            </div>

            <div className="col-3">
                <input id="wd-display-grade-as" className="form-control" value={quiz.access_code}
                    onChange={(e) => updateQ({...q, time_limit: e.target.value})}></input>
            </div>

        </div><br />

        <div className="row justify-content-center">
            
            <div className="col-2 text-end">
                <label htmlFor="wd-display-grade-as" className="form-label">One Question at a Time</label>
            </div>

            <div className="col-3">
                <select id="wd-display-grade-as" className="form-select">
                    <option value="YES" selected>Yes</option>
                    <option value="NO">No</option>
                </select>
            </div>

        </div><br />

        <div className="row justify-content-center">
            
            <div className="col-2 text-end">
                <label htmlFor="wd-display-grade-as" className="form-label">Webcam Required</label>
            </div>

            <div className="col-3">
                <select id="wd-display-grade-as" className="form-select">
                    <option value="YES">Yes</option>
                    <option value="NO" selected>No</option>
                </select>
            </div>

        </div><br />

        <div className="row justify-content-center">
            
            <div className="col-2 text-end">
                <label htmlFor="wd-display-grade-as" className="form-label">Lock Questions After Answering</label>
            </div>

            <div className="col-3">
                <select id="wd-display-grade-as" className="form-select">
                    <option value="YES">Yes</option>
                    <option value="NO" selected>No</option>
                </select>
            </div>

        </div><br />

            <div className="row justify-content-center">

                <div className="col-4 text-end">
                    <label htmlFor="wd-assign-to" className="form-label">Assign</label>
                </div>

                <div className="col-5">
                    <div className="card">
                        <div className="card-body">
                        
                            Assign to<br/>
                            <input id="wd-assign-to" className="form-control mb-2" value="Everyone" />
                    
                            Due<br />
                            <input type="date" id="wd-due-date" className="form-control mb-2" 
                                    value={q && q.due_date} onChange={(e) => {updateQ({...q, due_date: e.target.value}); console.log(e.target.value);}}/>
                        
                            <div className="row pt-2">
                                    
                                <div className="col">
                                    Available from<br/>
                                    <input 
                                        type="date" id="wd-available-from" 
                                        className="form-control mb-2" 
                                        value={q && q.date_available} 
                                        onChange={(e) => updateQ({...q, date_available: e.target.value})}/>
                                </div>
                                
                                <div className="col">
                                    Until<br/>
                                    <input type="date" id="wd-availaible-until"   
                                        className="form-control mb-2" 
                                        value={q && q.available_until} 
                                        onChange={(e) => updateQ({...q, available_until: e.target.value})} />
                                </div>
                                    
                            </div>

                        </div>
                    </div>
                </div>

            </div>
                
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
    )
}