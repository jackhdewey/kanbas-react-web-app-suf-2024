export default function AssignmentEditor() {
    return (

        <div id="wd-assignments-editor">

            <label htmlFor="wd-name" className="form-label"><h4>Assignment Name</h4></label>
            <input id="wd-name" className="form-control" value="A1 - ENV + HTML" /><br />

            <textarea id="wd-description" className="form-control" cols={50} rows={9}>
                The assignment is available online. 
                Submit a link to the landing page of your web application running on Netlify. The landing page should include the following: Your full name and section, Links to each of the lab assignments, Link the the Kanbas application, Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
            </textarea><br />

       
            <div className="row justify-content-end">

                <div className="col-2">
                    <label htmlFor="wd-points" className="form-label">Points</label>
                </div>
                
                <div className="col-5">
                    <input id="wd-points" className="form-control" value={100} />
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
                                <input type="date" id="wd-due-date" className="form-control mb-2" value="2024-05-13" />
                        
                                <div className="row pt-2">
                                    
                                    <div className="col">
                                        Available from<br/>
                                        <input type="date" id="wd-available-from" className="form-control mb-2" value="2024-05-06" />
                                    </div>
                                
                                    <div className="col">
                                        Until<br/>
                                        <input type="date" id="wd-availaible-until" className="form-control mb-2" value="2024-05-20" />
                                    </div>
                                    
                                </div>

                            </div>

                        </div>

                    </div>
           
            </div>
                
            <hr />

            <div>

                <button id="wd-save" type="button" className="btn btn-danger float-end">
                    Save
                </button>  

                <button type="button" id="wd-cancel" className="btn btn-secondary float-end" >
                    Cancel
                </button>

            </div>
             

        </div>
    );
}

  