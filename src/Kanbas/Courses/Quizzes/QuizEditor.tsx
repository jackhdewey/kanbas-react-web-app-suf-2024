import { Routes, Route, Navigate, useParams } from "react-router";
import TOC from "./TOC";
import DetailEditor from "./DetailEditor";
import QuestionEditor from "./QuestionEditor";

export default function QuizEditor() {

    //const { cid, qid } = useParams();
    //const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    //let quiz = quizzes.find((a: any) => a._id === qid);

    return (
        <div id="wd-quizzes-editor">
            <div className="flex-fill p-4">
                <Routes>
                    <Route path="/" element={<Navigate to="Details" />} />
                    <Route path="Details" element={<DetailEditor />} />
                    <Route path="Questions" element={<QuestionEditor />} />
                </Routes>
            </div>         
        </div>
    );
}