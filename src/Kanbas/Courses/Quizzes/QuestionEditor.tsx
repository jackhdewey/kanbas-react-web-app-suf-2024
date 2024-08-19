import { useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import Question from "./Question";
import TOC from "./TOC";
import { updateQuiz } from "./reducer";
import * as client from "./client";


export default function QuestionEditor() {
    
    const { cid, qid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    let quiz = quizzes.find((a: any) => a._id === qid);

    const [ questions, setQuestions ] = useState(quiz.questions);
    const dispatch = useDispatch();

    const addQuestion = async () => {
        const newQuestion = {
            id: new Date().getTime().toString(),
            name: "Easy Question",
            type: "MC",
            points: 10,
            question: "Enter question text here",
            answers: []
        }
        const newQuestions = [...questions, newQuestion];
        const newPoints = quiz.points + newQuestion.points;
        setQuestions(newQuestions);
        quiz = {...quiz, questions: newQuestions, points: newPoints};
        console.log(quiz);
        dispatch(updateQuiz(quiz));
        await client.updateQuiz(quiz);
    };

    const deleteQuestion = async (qsid: string) => {
        const newQuestions = questions.filter((q: any) => q.id !== qsid);
        const newPoints = quiz.points - questions.find((q: any) => q.id === qsid).points;
        setQuestions(newQuestions);
        quiz = {...quiz, questions: newQuestions, points: newPoints};
        console.log(quiz);
        dispatch(updateQuiz(quiz));
        await client.updateQuiz(quiz);
        setEditing(false);
    };

    const updateQuestion = async (question: any) => {
        const updatedQuestions = questions.filter((q: any) => q.id !== question.id)
        let newPoints = quiz.points - questions.find((q: any) => q.id === question.id).points;
        const newQuestions = [...updatedQuestions, question];
        newPoints += question.points;
        setQuestions(newQuestions);
        quiz = {...quiz, questions: newQuestions, points: newPoints};
        console.log(quiz);
        dispatch(updateQuiz(quiz));
        await client.updateQuiz({...quiz, questions: newQuestions});
        setEditing(false);
    };

    const saveQuiz = async (quiz: any) => {
        quiz = {...quiz, questions: questions};
        dispatch(updateQuiz(quiz));
        await client.updateQuiz(quiz);
        setEditing(false);
    }

    const [ editing, setEditing ] = useState(false);
    const [ activeQuestion, setActiveQuestion ] = useState({});

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

            {editing && <Question   activeQuestion={activeQuestion} 
                                    setActiveQuestion={setActiveQuestion}
                                    updateQuestion={updateQuestion}/>}

            <hr />

            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                QUESTIONS
            </div>

            <ul className="wd-quizzes list-group rounded-0">
                {quiz && questions.map((question: any) => (
                    <li className="wd-quiz list-group-item p-3 ps-1">
                        <div className="row">

                            <div className="col-1 text-nowrap">
                                <BsGripVertical className="me-2 fs-3" />
                            </div>

                            <div className="col-10">
                                {question.name}
                                <br />
                                {" " + question.points} pts
                            </div>
                                    
                            <div className="col-1">
                                <div className="float-end text-nowrap">
                                
                                    <FaRegEdit className="text-success me-2 fs-3"
                                                onClick={() => {
                                                    setActiveQuestion(question);
                                                    setEditing(true);
                                                    }
                                                }/>
                                    <FaTrash className="text-danger me-2 mb-1"
                                                onClick={() => {
                                                    const remove = window.confirm(`Remove question ${question.id}`)
                                                    if (remove) {
                                                        deleteQuestion(question.id)}
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

            <hr />

            <div className="float-end">

                <Link 
                    to={`/Kanbas/Courses/${cid}/Quizzes`} 
                    type="button" 
                    id="wd-save" 
                    className="btn btn-danger float-center me-2" 
                    onClick={ () => {
                        const published = {...quiz, published: true};
                        saveQuiz(published);
                        } } >
                    Save and Publish
                </Link>  

                <Link 
                    to={`/Kanbas/Courses/${cid}/Quizzes`} 
                    type="button" 
                    id="wd-save" 
                    className="btn btn-warning float-center me-2" 
                    onClick={ () => saveQuiz(quiz) } >
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