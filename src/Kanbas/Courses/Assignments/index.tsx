import { FaPlus } from "react-icons/fa6";
import { BsGripVertical, BsSearch, BsPencil } from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import "./index.css"

export default function Assignments() {
    return (
        <div id="wd-assignments">

            <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </button>

            <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </button>

            <input id="wd-search-assignment" type="text" className="form-control me-1 float-end" style={{width: "200px"}} placeholder="Search...">
            </input>

            <br/><br />

            <ul id="wd-assignments" className="list-group rounded-0">

                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">

                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Assignments
                        <ModuleControlButtons />
                    </div>

                    <ul className="wd-assignments list-group rounded-0">

                        <li className="wd-assignment list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <BsPencil className="text-success me-2 fs-3"/>
                            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">A1</a><br />
                                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts
                            <LessonControlButtons />
                        </li>

                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <BsPencil className="text-success me-2 fs-3"/>
                            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">A2</a><br />
                                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts
                            <LessonControlButtons />
                        </li>
                        
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <BsPencil className="text-success me-2 fs-3"/>
                            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">A3</a><br />
                                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100 pts
                            <LessonControlButtons />
                        </li>

                    </ul>
                </li>
            </ul>

        </div>
    );
}

  