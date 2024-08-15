import { Routes, Route, Navigate, useParams } from "react-router";
import TOC from "./TOC";
import DetailEditor from "./DetailEditor";
import QuestionEditor from "./QuestionEditor";

export default function QuizEditor() {
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