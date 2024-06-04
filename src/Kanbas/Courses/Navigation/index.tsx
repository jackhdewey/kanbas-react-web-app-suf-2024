import "./index.css";

export default function CoursesNavigation() {
    return (
      <div id="wd-courses-navigation" className="list-group rounded-0">
            <a id="wd-course-home-link" className="list-group-item border-0 active" href="#/Kanbas/Courses/1234/Home">
              Home
            </a>
            <a id="wd-course-modules-link" className="list-group-item text-danger border-0" href="#/Kanbas/Courses/1234/Modules">
              Modules
            </a>
            <a id="wd-course-piazza-link" className="list-group-item text-danger border-0" href="#/Kanbas/Courses/1234/Piazza">
              Piazza
            </a>
            <a id="wd-course-zoom-link" className="list-group-item text-danger border-0" href="#/Kanbas/Courses/1234/Zoom">
              Zoom
            </a>
            <a id="wd-course-quizzes-link" className="list-group-item text-danger border-0" href="#/Kanbas/Courses/1234/Assignments">
              Assignments
            </a>
            <a id="wd-course-assignments-link" className="list-group-item text-danger border-0" href="#/Kanbas/Courses/1234/Quizzes">
              Quizzes
            </a>
            <a id="wd-course-grades-link" className="list-group-item text-danger border-0" href="#/Kanbas/Courses/1234/Grades">
              Grades
            </a>
      </div>
  );
}
  