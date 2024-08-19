import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { addQuiz } from "./reducer";
import * as client from "./client";
import FacultyRoute from "../../FacultyRoute";


export default function QuizControls() {

    const { cid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const quiz = {
          "name": `New Quiz ${quizzes.length}`,    
          "quiz_type": "GRADED",
          "group": "QUIZZES",
          "shuffle_answers": "NO",
          "multiple_attempts": "NO",
          "num_attempts": 1,
          "course": cid, 
          "date_available": "2024-06-24", 
          "due_date":"2024-06-24", 
          "points": 0, 
          "description":"a test of your knowledge",
          "questions": []
    };

    const dispatch = useDispatch();
    const newQuiz = async (quiz: any) => {
        console.log(quiz);
        const newQuiz = await client.createQuiz(cid as string, quiz);
        console.log(newQuiz);
        dispatch(addQuiz(newQuiz));
    };
 
    return (
      <div id="wd-quiz-controls" className="text-nowrap">

          <div>
              <CiSearch className="position-absolute" style={{top: "170px", width: "40px"}}/>
              <input id="wd-search-quiz" 
                className="form-control me-1 float-start" 
                style={{height: "65px", width: "400px"}} 
                type="text" placeholder="    Search...">
              </input>
          </div>

          <button id="wd-add-quiz-group" 
                  className="btn btn-lg btn-secondary me-1 float-end">

              <BsThreeDotsVertical className="position-relative" style={{ bottom: "1px" }}/> 
          </button>

        <FacultyRoute >
            <button id="wd-add-quiz" 
                className="btn btn-lg btn-danger me-1 float-end"
                onClick={() => newQuiz(quiz)}>

              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              Quiz
            </button>
        </FacultyRoute>


      </div>
    );
}