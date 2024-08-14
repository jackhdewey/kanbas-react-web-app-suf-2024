import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import CoursesNavigation from "./Navigation";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import PeopleTable from "./People/Table";
import Quizzes from "./Quizzes";
import QuizDetails from "./Quizzes/QuizDetails";
import QuizEditor from "./Quizzes/QuizEditor";
import DetailEditor from "./Quizzes/DetailEditor";
import QuestionEditor from "./Quizzes/QuestionEditor";

export default function Courses( { courses }: {courses: any[]}) {
    
    const { pathname } = useLocation()
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);

    return (
        <div id="wd-courses">

            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1"/>
                {course && course.name} &gt; {pathname.split("/")[4]}
            </h2>
            <hr />

            <div className="d-flex">
                
                <div className="d-none d-md-block">
                    <CoursesNavigation />
                </div>

                <div className="flex-fill p-4">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="Quizzes" element={<Quizzes />} />
                        <Route path="Quizzes/:qid" element={<QuizDetails />} />
                        <Route path="Quizzes/:qid/Editor" element={<QuizEditor />} />
                        <Route path="Quizzes/:qid/Editor/Details" element={<DetailEditor />} />
                        <Route path="Quizzes/:qid/Editor/Questions" element={<QuestionEditor />} />
                        <Route path="Grades" element={<Grades />} />
                        <Route path="People" element={<PeopleTable />} />
                        <Route path="People/:uid" element={<PeopleTable />} />
                    </Routes>
                </div>  

             </div>   

        </div>
    );
}
  