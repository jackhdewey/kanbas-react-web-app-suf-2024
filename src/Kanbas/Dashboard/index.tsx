import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FacultyRoute from "../FacultyRoute";
import DashboardControls from "./DashboardControls";
import StudentRoute from "../StudentRoute";
import CourseEnrollment from "./Enrollment";
import * as userClient from "../Account/client";

export default function Dashboard( 
    { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse } : {
        courses: any[]; 
        course: any; 
        setCourse: (course: any) => void; 
        addNewCourse: () => void; 
        deleteCourse: (course: any) => void; 
        updateCourse: () => void; })
    {

    const [profile, setProfile] = useState<any>({});
    const fetchProfile = async () => {
        const account = await userClient.profile();
        setProfile(account);
    };
    useEffect(() => { fetchProfile(); }, []);

    const enroll = async () => {

    }

    return (
        <div id="wd-dashboard">

            <h1 id="wd-dashboard-title">Dashboard</h1>

            <hr />

            <FacultyRoute>
                <DashboardControls course={course} 
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    updateCourse={updateCourse}
                                    />
            </FacultyRoute>

            <StudentRoute>
                <CourseEnrollment courses={courses} profile={profile} />
            </StudentRoute>

            <hr />

            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> 
            <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.filter((course: any) => course.students.includes(profile._id)).map((course) => 
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

        </div>
    );
}
  