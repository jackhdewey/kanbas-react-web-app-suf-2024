import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Quiz() {

    const { cid, qid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    let quiz = quizzes.find((a: any) => a._id === qid);
    const questions = quiz.questions;

    const [activeQuestion, setActiveQuestion ] = useState(questions[0]);
    const [ questionIndex, setQuestionIndex ] = useState(0);

    const nextQuestion = () => {
        let current_question = questionIndex;
        setQuestionIndex(current_question += 1);
        if (questions[current_question]) {
            setActiveQuestion(questions[current_question]);
        }
    }
    const prevQuestion = () => {
        let current_question = questionIndex;
        setQuestionIndex(current_question -= 1);
        if (questions[current_question]) {
            setActiveQuestion(questions[current_question]);
        }
    }

    return (
        <div>   
            <div className="wd-dashboard-course col" style={{ width: "700px"}}>
                <div className="card">
                    <div className="card-body">

                        <div className="row">
                            <h1>Question {questionIndex+1}</h1>
                        </div>

                        <div className="row">
                            <p className="wd-dashboard-course-title card-text" 
                                style={{ maxHeight: 53, overflow: "hidden" }}>
                                {activeQuestion.question}
                            </p>
                        </div>

                        <div className="form-check">
                            {activeQuestion.answers.map((answer: any) =>
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

            { questionIndex - 1 >= 0 &&
                <button className="btn btn-secondary"
                        onClick={prevQuestion}>
                    Prev Question
                </button>
            }
            { questionIndex + 1 < questions.length &&
                <button className="btn btn-secondary float-end"
                        onClick={nextQuestion}>
                    Next Question
                </button>
            }
            { questionIndex + 1 === questions.length &&
                <Link className="btn btn-secondary float-end"
                        to={`/Kanbas/Courses/${cid}/Quizzes`}>
                    Submit Quiz
                </Link>
                }

        </div>
    );
}