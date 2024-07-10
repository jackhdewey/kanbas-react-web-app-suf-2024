import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import "./index.css"

export default function Assignments() {

    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const course_assignments = assignments.filter((a: any) => (a.course === cid));

    return (
        <div id="wd-assignments">

            {cid && <AssignmentControls cid={cid} aid={`A10${course_assignments.length+1}`} />}
            
            <br/><br/><br/>

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

                                        <div className="col-1 text-nowrap">
                                            <BsGripVertical className="me-2 fs-3" />
                                            <FaRegEdit className="text-success me-2 fs-3"/>
                                        </div>

                                        <div className="col-10">
                                            <Link key={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} 
                                                  to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} 
                                                  className="wd-assignment-link link-dark link-underline-light">{assignment._id}</Link><br />

                                            <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> {assignment.date_available.split("-")[1]} {assignment.date_available.split("-")[2]}  at 12:00am | <b>Due</b> {assignment.due_date.split("-")[1]} {assignment.due_date.split("-")[2]} at 11:59pm | {assignment.points} pts
                                        </div>

                                        <div className="col-1">
                                            <AssignmentControlButtons aid={assignment._id}/>    
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

  