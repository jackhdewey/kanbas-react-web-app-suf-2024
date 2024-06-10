import { FaRegEdit } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import "./index.css"

export default function Assignments() {
    return (
        <div id="wd-assignments">

            <AssignmentControls /><br /><br /><br />

            <ul id="wd-assignments" className="list-group rounded-0">

                <li className="wd-title list-group-item p-0 mb-5 fs-5 border-gray">

                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <ModuleControlButtons />
                    </div>

                    <ul className="wd-assignments list-group rounded-0">

                        <li className="wd-assignment list-group-item p-3 ps-1">
                            <div className="row">
                                <div className="col-1">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <FaRegEdit className="text-success me-2 fs-3"/>
                                </div>
                                <div className="col-10">
                                    <a className="wd-assignment-link link-dark link-underline-light" href="#/Kanbas/Courses/1234/Assignments/123">A1</a><br />
                                    <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts
                                </div>
                                <div className="col-1">
                                    <LessonControlButtons />    
                                </div>
                            
                            </div>
                        </li>

                        <li className="wd-assignment list-group-item p-3 ps-1">
                            <div className="row">
                                <div className="col-1">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <FaRegEdit className="text-success me-2 fs-3"/>
                                </div>
                                <div className="col-10">
                                    <a className="wd-assignment-link link-dark link-underline-light" href="#/Kanbas/Courses/1234/Assignments/123">A2</a><br />
                                    <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts
                                </div>
                                <div className="col-1">
                                    <LessonControlButtons />
                                </div>
                            </div>  
                        </li>
                        
                        
                        <li className="wd-assignment list-group-item p-3 ps-1">
                            <div className="row">
                                <div className="col-1">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <FaRegEdit className="text-success me-2 fs-3"/>
                                </div>
                                <div className="col-10">
                                    <a className="wd-assignment-link link-dark link-underline-light" href="#/Kanbas/Courses/1234/Assignments/123">A3</a><br />
                                    <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100 pts
                                </div>
                                <div className="col-1">
                                    <LessonControlButtons />
                                </div>
                            </div>
                        </li>

                    </ul>
                </li>
            </ul>

        </div>
    );
}

  