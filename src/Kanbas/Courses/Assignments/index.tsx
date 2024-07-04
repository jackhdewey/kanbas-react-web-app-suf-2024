import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import * as db from "../../Database";
import "./index.css"

export default function Assignments() {
    const { cid, aid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    console.log(aid);
    console.log(cid);

    return (
        <div id="wd-assignments">

            {cid && <AssignmentControls cid={cid} aid={""} />}<br /><br /><br />

            <ul id="wd-assignments" className="list-group rounded-0">

                <li  className="wd-title list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        {/* <ModuleControlButtons moduleId={module._id} /> */}
                    </div>

                    <ul className="wd-assignments list-group rounded-0">
                        {assignments.filter((assignment: any) => assignment.course === cid).map((assignment: any) => 
                            (
                                <li className="wd-assignment list-group-item p-3 ps-1">
                                    <div className="row">
                                        <div className="col-1">
                                            <BsGripVertical className="me-2 fs-3" />
                                            <FaRegEdit className="text-success me-2 fs-3"/>
                                        </div>
                                        <div className="col-10">
                                            <Link key={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} 
                                                  to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} 
                                                  className="wd-assignment-link link-dark link-underline-light">{assignment._id}</Link><br />
                                                  
                                            <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts
                                        </div>
                                        <div className="col-1">
                                            <LessonControlButtons />    
                                        </div>
                                    </div>
                                </li>
                            )
                        )}
                    </ul>
                </li>

            </ul>

        </div>
    );
}

  