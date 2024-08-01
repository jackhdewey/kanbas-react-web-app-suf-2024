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
            <a id="wd-retrieve-assignments" className="btn btn-primary me-2"
                href={`${REMOTE_SERVER}/lab5/assignment`} >
                Get Assignment
            </a>
            <a id="wd-retrieve-modules" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module`} >
                Get Module
            </a>
            <hr/>

            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary me-2"
                href={`${REMOTE_SERVER}/lab5/assignment/title`} >
                Get Title
            </a>
            <a id="wd-retrieve-module-name" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module/name`} >
                Get Module Name
            </a>
            <hr/>

            <h4>Modifying Properties</h4>

            <a id="wd-update-assignment-title" className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`} >
                Update Title
            </a>
            <input id="wd-assignment-title" className="form-control w-75"
                value={assignment.title} 
                onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
            <br />

            <a id="wd-update-assignment-score" className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`} >
                Update Score
            </a>
            <input id="wd-assignment-score" className="form-control w-75" 
                type="number" value={assignment.score} min="0" max="100" 
                onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })} />
            <br />

            <div className="form-check">
                <a id="wd-update-assignment-completed" className="form-check-label btn btn-primary"
                    href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`} >
                    Update Completion
                </a>
                <input id="wd-assignment-completed" className="form-check-input"
                    type="checkbox" checked={assignment.completed} 
                    onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} />
            </div>
            <hr /> 

            <a id="wd-update-module-name" className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/name/${module.name}`} >
                Update Name
            </a>
            <input id="wd-module-name" className="form-control w-75" 
                value={module.name} 
                onChange={(e) => setModule({ ...module, name: e.target.value })} />
            <br />

            <a id="wd-update-module-description" className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/description/${module.description}`} >
                Update Description
            </a>
            <input id="wd-module-description" className="form-control w-75" 
                value={module.description} 
                onChange={(e) => setModule({ ...module, description: e.target.value })} />
            <hr /> 

        </div>
    );
}
