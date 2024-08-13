import { useState } from "react";
import * as client from "../Courses/client";

export default function CourseEnrollment(
    { profile, courses } : { 
        courses: any[],
        profile: any }) 
    {

    const [ display, setDisplay ] = useState(false);
    const displayCourses = () => {
        setDisplay(!display);
    };

    const addUserToCourse = async (course: any) => {
        if (!course.students.includes(profile.username)) {
            course.students = [...course.students, profile.username]
        } 
        const status = await client.updateCourse(course);
    }

    return (<div>            
        <h3>
            Browse Courses
            <button id="wd-add-new-course-click" onClick={displayCourses}
                className="btn btn-primary float-end">Search</button>
        </h3> 

        {display && 
            <div id="wd-dashboard-courses" className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
                {courses.map((course) => 
                    (
                        <div className="wd-dashboard-course col" style={{ width: "320px"}}>

                            <div className="card rounded-3 overflow-hidden">

                                <img src={course.image} height="{160}"/>

                                <div className="card-body">

                                    <span className="wd-dashboard-course-link" 
                                        style={{ textDecoration: "none", color: "navy",fontWeight: "bold"}}> 
                                        {course.name} 
                                    </span>
                                    <p className="wd-dashboard-course-title card-text" 
                                        style={{ maxHeight: 53, overflow: "hidden" }}>{course.description} 
                                    </p>

                                    <button onClick={() => {
                                        addUserToCourse(course);
                                    }} 
                                        className="btn btn-primary"> 
                                        Enroll
                                    </button>

                                </div>

                            </div>

                        </div>
                    ))
                }
            </div>
            </div>
        }
        
    </div>);
}