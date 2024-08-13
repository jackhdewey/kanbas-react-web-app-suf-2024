import { useState } from "react";
import * as client from "../Courses/client";

export default function DashboardControls(
    { profile, courses, setCourses, course, setCourse} : {
        profile: any;
        courses: any[];
        setCourses: (courses: any[]) => void;
        course: any;
        setCourse: (course: any) => void;})
    {

    const [ error, setError ] = useState("");

    const addNewCourse = async () => {
        try {
            const newCourse = await client.createCourse(course);
            console.log(newCourse);
            setCourses([ ...courses, newCourse]);
            setError("");
        } catch (err: any) {
            setError(err.response.data.message);
        }
    };

    const updateCourse = async () => {
        try {
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
            setError("");
        } catch (err: any) {
            setError(err.response.data.message);
        }
    };    
    
    return (
        <div>            
            {error && <div className="wd-error alert alert-danger">{error}</div>}
            <h5>
                New Course

                <button id="wd-add-new-course-click" 
                        onClick={() => {
                            addNewCourse();
                        }}
                        className="btn btn-primary float-end">Add</button>

                <button id="wd-update-course-click" onClick={updateCourse}
                    className="btn btn-warning float-end me-2">Update</button>

            </h5> 

            <hr/>

            <input 
                className="form-control mb-2" 
                value={course.name} 
                onChange={(e) => setCourse({...course, name: e.target.value})}>
            </input>
            <textarea 
                className="form-control" 
                value={course.description} 
                onChange={(e) => setCourse({...course, description: e.target.value})}>
            </textarea>
        
        </div>
    );
}
