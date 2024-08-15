import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Quiz() {

    const { cid, qid, qsid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    let quiz = quizzes.find((a: any) => a._id === qid);
    const questions = quiz.questions;
    console.log(questions);
    const [question, setQuestion ] = useState(questions[0]);

    let current_question = 0;
    const nextQuestion = () => {
        current_question += 1;
        if (questions[current_question]) {
            setQuestion(questions[current_question]);
        }
    }

    const answers = [{value: 10}];
    
    return (
        <div>   
            <div className="wd-dashboard-course col" style={{ width: "700px"}}>
                <div className="card">
                    <div className="card-body">

                        <div className="row">
                            <h1>Question {current_question+1}</h1>
                        </div>

                        <div className="row">
                            <p className="wd-dashboard-course-title card-text" 
                                style={{ maxHeight: 53, overflow: "hidden" }}>
                                    What is the meaning of life?
                            </p>
                        </div>

                        <div className="form-check">
                            {answers.map((answer: any) =>
                                <div>
                                    <input id="" className="form-check-input" type="radio" name="answer">
                                    </input>
                                    <label className="form-check-label" htmlFor="">
                                        {answer.value}
                                    </label>
                                </div>
                            )}
                        </div>

                    </div>     
                </div>
            </div>

            { current_question + 1 < questions.length &&
                <button className="btn btn-secondary float-end"
                        onClick={nextQuestion}>
                    Next Question
                </button>
            }
            { current_question + 1 === questions.length &&
                <Link className="btn btn-secondary float-end"
                        to={`/Kanbas/Courses/${cid}/Quizzes`}>
                    Submit Quiz
                </Link>
                }

        </div>
    );
}