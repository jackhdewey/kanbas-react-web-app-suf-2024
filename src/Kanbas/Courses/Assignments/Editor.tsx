import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as client from "./client";

export default function AssignmentEditor() {

    const { cid, aid } = useParams();
    const [ a, updateAssignment ] = useState<any>({ 
        "_id": aid, 
        "title": "New Assignment",    
        "course": cid, 
        "date_available": "2024-06-24", 
        "due_date":"2024-06-24", 
        "points":"100", 
        "description":"a test of your knowledge"
    });

    const dispatch = useDispatch();
    const saveAssignment = async (assignment: any) => {
        const newAssignment = await client.createAssignment(cid as string, assignment);
        dispatch(addAssignment(newAssignment));
    }

    return (

        <div id="wd-assignments-editor">

            <label htmlFor="wd-name" className="form-label"><h4>Assignment Name</h4></label>

            <input id="wd-name" className="form-control" 
                    value={a &&`${a.title}`} onChange={(e) => updateAssignment({...a, title: e.target.value})} /><br />

            <textarea id="wd-description" className="form-control" cols={50} rows={9}
                        value={a.description} onChange={(e) => updateAssignment({...a, description: e.target.value})} >
                {a && a.description}
            </textarea><br />

       
            <div className="row justify-content-end">

                <div className="col-2">
                    <label htmlFor="wd-points" className="form-label">Points</label>
                </div>
                
                <div className="col-5">
                    <input id="wd-points" className="form-control" 
                            value={a && a.points} onChange={(e) => updateAssignment({...a, points: e.target.value})}/>
                </div>
    
            </div><br />

            <div className="row  justify-content-end">
                <div className="col-2">
                    <label htmlFor="wd-group form-label">Assignment Group</label>
                </div>
                
                <div className="col-5">
                    <select id="wd-group" className="form-select">
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    </select>
                </div>
            </div><br />

            <div className="row justify-content-end">
               
                <div className="col-2">
                    <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
                </div>
        
                <div className="col-5">
                    <select id="wd-display-grade-as" className="form-select">
                        <option value="PERCENTAGE">Percentange</option>
                    </select>
                </div>

            </div><br />

            <div className="row justify-content-end">

                <div className="col-2">
                    <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                </div>
                   
                <div className="col-5">

                    <div className="card">
                        <div className="card-body">

                            <select id="wd-submission-type" className="form-select mb-4">
                                <option value="ONLINE">Online</option>
                            </select>

                            <label className="form-label mb-2"><h6>Online Entry Options:</h6></label>

                            <div className="form-check pb-2">
                            
                                <input type="checkbox" name="entry-options" id="wd-text-entry" className="form-check-input"/> 
                                <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label><br />
                            </div>

                            <div className="form-check pb-2">
                                <input type="checkbox" name="entry-options" id="wd-website-url" className="form-check-input"/> 
                                <label htmlFor="wd-website-url" className="form-check-label">Website URL</label><br />
                            </div>
                                
                            <div className="form-check pb-2">
                                <input type="checkbox" name="entry-options" id="wd-media-recordings" className="form-check-input"/> 
                                <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label><br />
                            </div>
                                
                            <div className="form-check pb-2">
                                <input type="checkbox" name="entry-options" id="wd-student-annotation" className="form-check-input"/> 
                                <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label><br />
                            </div>
                                
                            <div className="form-check pb-2">
                                <input type="checkbox" name="entry-options" id="wd-file-upload" className="form-check-input"/> 
                                <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label><br />
                            
                            </div>

                        </div>

                    </div>

                </div>
          
            </div><br />

            <div className="row justify-content-end">

                <div className="col-2">
                    <label htmlFor="wd-assign-to" className="form-label">Assign</label>
                </div>

                <div className="col-5">
                    <div className="card">
                        <div className="card-body">
                        
                            Assign to<br/>
                            <input id="wd-assign-to" className="form-control mb-2" value="Everyone" />
                    
                            Due<br />
                            <input type="date" id="wd-due-date" className="form-control mb-2" 
                                    value={a && a.due_date} onChange={(e) => {updateAssignment({...a, due_date: e.target.value}); console.log(e.target.value);}}/>
                        
                            <div className="row pt-2">
                                    
                                <div className="col">
                                    Available from<br/>
                                    <input 
                                        type="date" id="wd-available-from" 
                                        className="form-control mb-2" 
                                        value={a && a.date_available} 
                                        onChange={(e) => updateAssignment({...a, date_available: e.target.value})}/>
                                </div>
                                
                                <div className="col">
                                    Until<br/>
                                    <input type="date" id="wd-availaible-until"   
                                        className="form-control mb-2" 
                                        value={a && a.available_until} 
                                        onChange={(e) => updateAssignment({...a, available_until: e.target.value})} />
                                </div>
                                    
                            </div>

                        </div>
                    </div>
                </div>
           
            </div>
                
            <hr />

            <div>

                <Link 
                    to={`/Kanbas/Courses/${cid}/Assignments`} 
                    type="button" 
                    id="wd-save" 
                    className="btn btn-danger float-end" 
                    onClick={() => {saveAssignment(a)}}>
                    Save
                </Link>  

                <Link 
                    to={`/Kanbas/Courses/${cid}/Assignments`} 
                    type="button" 
                    id="wd-cancel" 
                    className="btn btn-secondary float-end" >
                    Cancel
                </Link>

            </div>
             

        </div>
    );
}

  