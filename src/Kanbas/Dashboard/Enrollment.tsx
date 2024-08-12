import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as courseClient from "../Account/client";

export default function CourseEnrollment({ courses, profile } : { courses: any[], profile: any }) {

    const [ display, setDisplay ] = useState(false);
    const displayCourses = () => {
        setDisplay(!display);
    };

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const addCourseToUser = () => {

    };
    const addUserToCourse = (courseId: string) => {
        
    };

    return (<div>            
        <h5>
            Browse Courses
            <button id="wd-add-new-course-click" onClick={displayCourses}
                className="btn btn-primary float-end">Search</button>
        </h5> 

        {display && 
            <div id="wd-dashboard-courses" className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
                {courses.map((course) => 
                    (
                        <div className="wd-dashboard-course col" style={{ width: "320px"}}>

                            <Link to={`/Kanbas/Courses/${course._id}`} 
                                className="text-decoration-none">
                                <div className="card rounded-3 overflow-hidden">

                                    <img src={course.image} height="{160}"/>

                                    <div className="card-body">

                                        <span className="wd-dashboard-course-link" 
                                            style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}> 
                                            {course.name} 
                                        </span>
                                        <p className="wd-dashboard-course-title card-text" 
                                            style={{ maxHeight: 53, overflow: "hidden" }}> {course.description} 
                                        </p>

                                        <button onClick={currentUser.courses} 
                                            className="btn btn-primary"> 
                                            Enroll
                                        </button>

                                    </div>

                                </div>
                            </Link>

                        </div>
                    ))
                }
            </div>
            </div>
        }
        
    </div>);
}