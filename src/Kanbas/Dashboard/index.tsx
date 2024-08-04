import { Link } from "react-router-dom";

export default function Dashboard( 
    { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse } : {
        courses: any[]; 
        course: any; 
        setCourse: (course: any) => void; 
        addNewCourse: () => void; 
        deleteCourse: (course: any) => void; 
        updateCourse: () => void; })
    {

    return (
        <div id="wd-dashboard">

            <h1 id="wd-dashboard-title">Dashboard</h1>

            <hr />

            <h5>
                New Course
                <button id="wd-add-new-course-click" onClick={addNewCourse}
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

            <hr />

            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> 
            <hr />
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

                                            <Link to={`/Kanbas/Courses/${course._id}/Home`} 
                                                className="btn btn-primary"> 
                                                Go 
                                            </Link>
                                            
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
  