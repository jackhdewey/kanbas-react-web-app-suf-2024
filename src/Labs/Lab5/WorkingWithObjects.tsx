import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {

    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment", 
        description: "Create a NodeJS server with ExpressJS",
        due: "2024-10-10", completed: false, score: 0
    });
    
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`
    const [module, setModule] = useState({
        id: 1, name: "New Module", 
        description: "The particular topic being covered this week",
        course: "CS101"
    });

    return (
        <div id="wd-working-with-objects">
            
            <h3>Working With Objects</h3>   

            <h4>Retrieving Objects</h4>
            <a href={`${REMOTE_SERVER}/lab5/assignment`} id="wd-retrieve-assignments" 
                className="btn btn-primary me-2" >
                Get Assignment
            </a>
            <a href={`${REMOTE_SERVER}/lab5/module`} id="wd-retrieve-modules" 
                className="btn btn-primary" >
                Get Module
            </a>
            <hr/>

            <h4>Retrieving Properties</h4>
            <a href={`${REMOTE_SERVER}/lab5/assignment/title`} id="wd-retrieve-assignment-title"
                className="btn btn-primary me-2">
                Get Title
            </a>
            <a href={`${REMOTE_SERVER}/lab5/module/name`} id="wd-retrieve-module-name" 
                className="btn btn-primary">
                Get Module Name
            </a>
            <hr/>

            <h4>Modifying Properties</h4>

            <a href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
                id="wd-update-assignment-title" className="btn btn-primary float-end">
                Update Title
            </a>
            <input value={assignment.title} onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} id="wd-assignment-title" className="form-control w-75"/>
            <br />

            <a href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
                id="wd-update-assignment-score" className="btn btn-primary float-end">
                Update Score
            </a>
            <input type="number" value={assignment.score} min="0" max="100" 
                onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })} className="form-control w-75" id="wd-assignment-score"/>
            <br />

            <div className="form-check">
                <a id="wd-update-assignment-completed" className="form-check-label btn btn-primary"
                    href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                    Update Completion
                </a>
                <input type="checkbox" id="wd-assignment-completed" className="form-check-input"
                    checked={assignment.completed} onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}/>
            </div>
            <hr /> 

            <a id="wd-update-module-name" className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Name
            </a>
            <input className="form-control w-75" id="wd-module-name"
                value={module.name} onChange={(e) => setModule({ ...module, name: e.target.value })}/>
            <br />

            <a id="wd-update-module-description" className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/description/${module.description}`}>
                Update Description
            </a>
            <input className="form-control w-75" id="wd-module-description"
                value={module.description} onChange={(e) => setModule({ ...module, description: e.target.value })}/>
            <hr /> 

        </div>
    );
}
