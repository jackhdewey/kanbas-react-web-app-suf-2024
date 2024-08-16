import MCQuestion from "./MCQuestion";
import TFQuestion from "./TFQuestion";
import FillQuestion from "./FillQuestion";


export default function Question({activeQuestion, setActiveQuestion, updateQuestion } : 
    {   activeQuestion: any, 
        setActiveQuestion: (question: any) => void,
        updateQuestion: (question: any) => void }) {

    return (
        <div className="container">

            <div className="row mb-2">

                <input className="form-control w-25 me-2" value={activeQuestion.name}
                        onChange={(e) => setActiveQuestion({...activeQuestion, name: e.target.value})}>
                </input>

                <select className="form-select w-25 me-2"
                        onChange={(e) => setActiveQuestion({...activeQuestion, type: e.target.value})}>
                    <option value="MC">Multiple Choice</option>
                    <option value="TF">True/False</option>
                    <option value="FB">Fill in the Blank</option>
                </select>

                <input className="form-control w-25" type="number" value={activeQuestion.points}
                        onChange={(e) => setActiveQuestion({...activeQuestion, points: parseInt(e.target.value)})}>
                </input>
            </div>

            <div className="row">
                <h4>Question:</h4>
                <textarea className="form-control w-75 me-2" cols={50} rows={9}
                            value={activeQuestion.question}
                            onChange={(e) => setActiveQuestion({...activeQuestion, question: e.target.value})}></textarea>
            </div>
     
            <hr />

            {activeQuestion.type==="MC" && <MCQuestion  question={activeQuestion} 
                                                        setQuestion={setActiveQuestion} 
                                                        updateQuestion={updateQuestion}/>}
            {activeQuestion.type==="TF" && <TFQuestion setQuestion={activeQuestion}/>}
            {activeQuestion.type==="FB" && <FillQuestion setQuestion={setActiveQuestion}/>}

            <button className="btn btn-warning" 
                    onClick={() => {
                        updateQuestion(activeQuestion)}}>
                Save Question
            </button>


        </div>
    );
}