import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FacultyRoute from "../FacultyRoute";
import DashboardControls from "./DashboardControls";
import StudentRoute from "../StudentRoute";
import CourseEnrollment from "./Enrollment";
import * as userClient from "../Account/client";

export default function Dashboard( 
    { courses, setCourses, course, setCourse, deleteCourse, updateCourse } : {
        courses: any[]; 
        setCourses: (courses: any[]) => void;
        course: any; 
        setCourse: (course: any) => void; 
        deleteCourse: (course: any) => void; 
        updateCourse: () => void; })
    {

    const [profile, setProfile] = useState<any>({});
    const [displayCourses, setDisplayCourses] = useState(courses);
    const fetchProfile = async () => {
        const account = await userClient.profile();
        setProfile(account);
    };
    useEffect(() => { 
        fetchProfile(); 
        if (profile.role == "STUDENT") {
            setDisplayCourses(courses.filter((course) => course.students.includes(profile.username)));
        } else {
            setDisplayCourses(courses.filter((course) => course.professor === profile.username));
        }
    }, []);

    return (
        <div id="wd-dashboard">

            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />

            <FacultyRoute>
                <DashboardControls profile={profile}
                                    course={course} 
                                    setCourse={setCourse}
                                    courses={courses}
                                    setCourses={setCourses}
                                    updateCourse={updateCourse} />
            </FacultyRoute>

            <StudentRoute>
                <CourseEnrollment profile={profile} courses={courses} setCourse={setCourse} />
            </StudentRoute>

            <hr />

            <h2 id="wd-dashboard-published">Published Courses ({displayCourses.length})</h2> 
            <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {displayCourses.map((course: any) => 
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
  