import { useEffect, useState } from "react";
import FacultyRoute from "../FacultyRoute";
import DashboardControls from "./DashboardControls";
import StudentRoute from "../StudentRoute";
import CourseEnrollment from "./Enrollment";
import * as courseClient from "../Courses/client";
import * as userClient from "../Account/client";
import { Link } from "react-router-dom";

export default function Dashboard( 
    { profile, setProfile, courses, setCourses} : {
        profile: any;
        setProfile: (profile: any) => void;
        courses: any[]; 
        setCourses: (courses: any[]) => void;})
    {

    const [activeCourses, setActiveCourses] = useState(courses);
    const selectActiveCourses = async () => {

        if (profile.role == "STUDENT") {
            setActiveCourses(courses.filter((course) => course.students.includes(profile.username)));
        } else {
            setActiveCourses(courses.filter((course) => course.author === profile.username));
        }
    };
    useEffect(() => {
        console.log(profile);
        selectActiveCourses();
    }, [])
    
    const [course, setCourse] = useState<any>({
            _id: "0", 
            name: "New Course", 
            number: "New Number", 
            author: profile.username,
            students: [],
            image: "/images/reactjs.jpg", 
            startDate: "2023-09-10", 
            endDate: "2023-12-15", 
            department: "Department", 
            credits: 4,
            description: "New Description"},
    );

    const deleteCourse = async (courseId: string) => {
        await courseClient.deleteCourse(courseId);
        setCourses(courses.filter((c) => c._id !== courseId));
    };

    return (
        <div id="wd-dashboard">

            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />

            <FacultyRoute>
                <DashboardControls  profile={profile}
                                    courses={courses}
                                    setCourses={setCourses}
                                    course={course}
                                    setCourse={setCourse}/>
            </FacultyRoute>

            <StudentRoute>
                <CourseEnrollment  profile={profile} 
                                    courses={courses} />
            </StudentRoute>

            <hr />

            <div>
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
            </div>

        </div>
    );
}
  