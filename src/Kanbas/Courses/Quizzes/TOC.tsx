import { useLocation, useParams } from "react-router";

export default function TOC() {
    const { cid, qid } = useParams();
    const { pathname } = useLocation();
    return (
        <ul className="nav nav-pills">
            <li className="nav-item"> 
                <a id="wd-details" 
                    className={`nav-link ${pathname.includes("Details") ? "active" : ""}`} 
                    href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/Editor/Details`}>
                    Details
                </a>
            </li>
            <li className="nav-item">
                <a id="wd-questions" 
                    className={`nav-link ${pathname.includes("Questions") ? "active" : ""}`} 
                    href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/Editor/Questions`}>
                    Questions
                </a>
            </li>
        </ul>
    );
}