import { Routes, Route, Navigate, useParams } from "react-router";
import TOC from "./TOC";
import DetailEditor from "./DetailEditor";

export default function QuizEditor() {
    return (
        <div id="wd-quizzes-editor">
            <div className="flex-fill p-4">
                <TOC />
                <DetailEditor />
            </div>         
        </div>
    );
}