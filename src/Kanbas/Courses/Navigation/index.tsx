import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

export default function CoursesNavigation() {
    const { cid } = useParams();
    const { pathname } = useLocation(); 
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

    return (
        <div id="wd-courses-navigation" className="list-group rounded-0">

            {links.map((link) => 
                (
                    <Link key={`/Kanbas/Courses/${cid}/${link}`} to={`/Kanbas/Courses/${cid}/${link}`} className={`list-group-item border-0 ${pathname.includes(link) ? "active" : ""}`}>
                        {link}
                    </Link>
                ))
            }
        </div>
    );
}
  