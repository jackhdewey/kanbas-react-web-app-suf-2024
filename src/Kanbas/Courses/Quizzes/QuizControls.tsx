import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function QuizControls({ cid }: { cid: string }) {

    const newQuizId = `A${new Date().getTime().toString()}`;
    const newQuiz = {
        
    };
 
    return (
      <div id="wd-quiz-controls" className="text-nowrap">
          <div>
              <CiSearch className="position-absolute" style={{top: "170px", width: "40px"}}/>
              <input 
                id="wd-search-quiz" 
                type="text" 
                className="form-control me-1 float-start" 
                style={{height: "65px", width: "400px"}} 
                placeholder="    Search...">
              </input>
          </div>

          <button id="wd-add-quiz-group" 
              className="btn btn-lg btn-secondary me-1 float-end">

              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              Group
          </button>

          <Link id="wd-add-quiz" 
                key={`/Kanbas/Courses/${cid}/Quizzes/${newQuizId}`} 
                to={`/Kanbas/Courses/${cid}/Quizzes/${newQuizId}`}
                className="btn btn-lg btn-danger me-1 float-end">

                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Quiz
          </Link>

      </div>
    );
}