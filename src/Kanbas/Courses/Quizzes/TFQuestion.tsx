import { useEffect, useState } from "react";


export default function TFQuestion({ question, setQuestion } : 
    {   question: any,
        setQuestion: (question: any) => void }) {

    const [ answers, setAnswers ] = useState(
    [
        {
            id: new Date().getTime().toString().concat("1"),
            value: "True",
            correct: true,
        },
        {
            id: new Date().getTime().toString().concat("2"),
            value: "False",
            correct: false,
        }
    ]);

    useEffect(() => {
        setQuestion({...question, answers: answers})
    }, []);

    const updateAnswer = (answer: any) => {
        const updatedAnswers = question.answers.filter((a: any) => a.id !== answer.id);
        console.log(updatedAnswers);
        const newAnswers = [...updatedAnswers, answer]; 
        console.log(newAnswers);
        setAnswers(newAnswers);
        setQuestion({...question, answers: newAnswers});
    }

    return (
        <div className="row">

            <h4>Answers:</h4>

            <ul className="wd-quizzes list-group rounded-0 w-75 m-2">

                    <li className="row list-group-item">

                        <label htmlFor={`answer-true`}>
                            <input type="radio" name="answers"       
                                    className="form-check-input"     
                                    checked={answers[0].correct} 
                                    onChange={(e) => {
                                        const newAnswer = {...answers[0], correct: e.target.value};
                                        updateAnswer(newAnswer);
                                    }}>
                            </input>
                        </label>

                        <input id={`answer-false`} className="form-control" 
                            value={answers[0].value} onChange={(e) => {
                                const newAnswer = {...answers[0], value: e.target.value};
                                updateAnswer(newAnswer);
                            }}>
                        </input>  

                    </li> 

                    <li className="row list-group-item">

                        <label htmlFor={`answer-true`}>
                            <input type="radio" name="answers"       
                                    className="form-check-input"     
                                    checked={answers[0].correct} 
                                    onChange={(e) => {
                                        const newAnswer = {...answers[1], correct: e.target.value};
                                        updateAnswer(newAnswer);
                                    }}>
                            </input>
                        </label>

                        <input id={`answer-false`} className="form-control" 
                            value={answers[1].value} onChange={(e) => {
                                const newAnswer = {...answers[1], value: e.target.value};
                                updateAnswer(newAnswer);
                            }}>
                        </input>  

                    </li> 
            </ul>

        </div>
    );
}