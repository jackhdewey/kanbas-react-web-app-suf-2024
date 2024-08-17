import { useEffect, useState } from "react";


export default function TFQuestion({question, setQuestion, updateQuestion} : 
    {   question: any,
        setQuestion: (question: any) => void,
        updateQuestion: (question: any) => void  }) {

    const [ answers, setAnswers ] = useState(
    [
        {
            id: new Date().getTime().toString(),
            value: "True",
            correct: false,
        },
        {
            id: new Date().getTime().toString(),
            value: "False",
            correct: false,
        }
    ]);

    useEffect(() => {
        setQuestion({...question, answers: answers})
    })

    const updateAnswer = (answer: any) => {
        console.log(answer.id);
        const updatedAnswers = question.answers.filter((a: any) => a.id !== answer.id);
        const newAnswers = [...updatedAnswers, answer]; 
        setAnswers(newAnswers);
        setQuestion({...question, answers: newAnswers});
    }

    return (
        <div className="row">

            <h4>Answers:</h4>

            <ul className="wd-quizzes list-group rounded-0 w-75 m-2">
                {answers.map((answer: any, i: number) => ( 
                    <li className="row list-group-item">

                        <label htmlFor={`answer-${i}`}>
                            <input type="radio" name="answers"      
                                    className="form-check-input"     
                                    checked={answer.correct} 
                                    onChange={(e) => {
                                        const newAnswer = {...answer, correct: e.target.value};
                                        updateAnswer(newAnswer);
                                    }}>
                            </input>
                        </label>

                        <input id={`answer-${i}`} className="form-control" 
                            value={answer.value} onChange={(e) => {
                                const newAnswer = {...answer, value: e.target.value};
                                updateAnswer(newAnswer);
                            }}>
                        </input>  

                    </li> 
                ))}  
            </ul>

        </div>
    );
}