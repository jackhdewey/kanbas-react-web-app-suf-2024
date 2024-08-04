import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { Routes, Route, Navigate } from "react-router";

import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard"
import Courses from "./Courses";
import * as client from "./Courses/client";
import store from "./store";
import "./styles.css";

export default function Kanbas() {

    const [courses, setCourses] = useState<any[]>([]);

    const fetchCourses = async() => {
        const courses = await client.fetchAllCourses();
        setCourses(courses);
    };
    useEffect(() => {
        fetchCourses();
    }, []);

    const [course, setCourse] = useState<any>({
        _id: "0", 
        name: "New Course", 
        number: "New Number", 
        image: "/images/reactjs.jpg", 
        startDate: "2023-09-10", 
        endDate: "2023-12-15", 
        department: "Department", 
        credits: 4,
        description: "New Description"});

    const addNewCourse = async () => {
        const newCourse = await client.createCourse(course);
        setCourses([ ...courses, newCourse]);
    };

    const deleteCourse = async (courseId: string) => {
        const response = await client.deleteCourse(courseId);
        setCourses(courses.filter((c) => c._id !== courseId));
    };

    const updateCourse = async () => {
        await client.updateCourse(course);
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };    

    return (
        <Provider store={store}>
            
            <div id="wd-kanbas">
                <div className="d-flex">

                    <div className="bg-black d-none d-md-block">
                        <KanbasNavigation />
                    </div>

                    <div className="flex-fill p-4">
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard"/>}/>
                            <Route path="Account" element={<h1>Account</h1>}/>
                            <Route path="Dashboard" element={<Dashboard 
                                                                courses={courses}
                                                                course={course}
                                                                setCourse={setCourse}
                                                                addNewCourse={addNewCourse}
                                                                deleteCourse={deleteCourse}
                                                                updateCourse={updateCourse}/>
                                                            } />
                            <Route path="Courses/:cid/*" element={<Courses courses={courses}/>}/>
                            <Route path="Calendar" element={<h1>Calendar</h1>}/>
                            <Route path="Inbox" element={<h1>Inbox</h1>}/>
                        </Routes>
                    </div>
                </div>
            </div>

        </Provider>
    );
}
  