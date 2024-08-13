import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FacultyRoute from "../FacultyRoute";
import * as client from "../Courses/client";

export default function ActiveCourses( { profile, setCourse, courses, setCourses } : { profile: any, setCourse: (course: any) => void, courses: any[], setCourses: (courses: any[]) => void }) {

    const [activeCourses, setActiveCourses] = useState(courses);

    const selectActiveCourses = () => {
        if (profile.role == "STUDENT") {
            setActiveCourses(courses.filter((course) => course.students.includes(profile.username)));
        } else {
            setActiveCourses(courses.filter((course) => course.author === profile.username));
        }
    };
    useEffect(() => {
        selectActiveCourses();
    }, [])

    const deleteCourse = async (courseId: string) => {
        const response = await client.deleteCourse(courseId);
        setCourses(courses.filter((c) => c._id !== courseId));
    };

    return( <div>
            <h3 id="wd-dashboard-published">Active Courses ({activeCourses.length})</h3> 
    <hr />
    <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
            {activeCourses.map((course: any) => 
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

                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} 
                                        className="btn btn-primary"> 
                                        Go 
                                    </Link>
                                    
                                    <FacultyRoute>
                                    <button id="wd-delete-course-click" 
                                        onClick={
                                            (e) => {
                                                e.preventDefault(); 
                                                deleteCourse(course._id);
                                            }
                                        }
                                        className="btn btn-danger float-end"> 
                                        Delete 
                                    </button>

                                    <button id="wd-edit-course-click" 
                                        onClick={(e) => {
                                            e.preventDefault(); 
                                            setCourse(course);
                                            }
                                        }
                                        className="btn btn-warning me-2 float-end"> 
                                        Edit 
                                    </button>
                                    </FacultyRoute>

                                </div>

                            </div>
                        </Link>

                    </div>
                ))
            }
        </div>
    </div>

    </div>)

}