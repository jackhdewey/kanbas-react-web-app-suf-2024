
export default function DashboardControls(
    { course, setCourse, addNewCourse, updateCourse } : {
        course: any; 
        setCourse: (course: any) => void; 
        addNewCourse: () => void; 
        updateCourse: () => void; })
    {
    
        return (<div>            
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
        
        </div>);
}
