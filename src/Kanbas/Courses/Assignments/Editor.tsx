export default function AssignmentEditor() {
    return (

        <div id="wd-assignments-editor">

            <label htmlFor="wd-name" className="form-label"><h3>Assignment Name</h3></label>
            <input id="wd-name" className="form-control" value="A1 - ENV + HTML" /><br /><br />

            <textarea id="wd-description" className="form-control" cols={50} rows={9}>
                The assignment is available online. Submit a link to the landing page of your web application running on Netlify. The landing page should include the following: Your full name and section, Links to each of the lab assignments, Link the the Kanbas application, Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
            </textarea><br /><br />

       
            <div className="row">

                <div className="col">
                    <label htmlFor="wd-points" className="form-label">Points</label>
                </div>
                
                <div className="col">
                    <input id="wd-points" className="form-control" value={100} />
                </div>
    
            </div><br />

            <div className="row">
                <div className="col">
                    <label htmlFor="wd-group form-label">Assignment Group</label>
                </div>
                
                <div className="col">
                    <select id="wd-group ">
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    </select>
                </div>
            </div><br />

            <div className="row">
               
                <div className="col">
                    <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
                </div>
        
                <div className="col">
                    <select id="wd-display-grade-as">
                        <option value="PERCENTAGE">Percentange</option>
                    </select>
                </div>

            </div><br />

            <div className="row">

                <div className="col">
                    <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                </div>

                <div className="col">
                    <select id="wd-submission-type">
                        <option value="ONLINE">Online</option>
                    </select><br />
                </div>
                   
                <div className="col">
                    <label className="form-label">Online Entry Options:</label><br />
                    <input type="checkbox" name="entry-options" id="wd-text-entry" className="form-control"/> 
                    <label htmlFor="wd-text-entry" className="form-label">Text Entry</label><br />
                </div>

                <input type="checkbox" name="entry-options" id="wd-website-url" className="form-control"/> 
                <label htmlFor="wd-website-url" className="form-label">Website URL</label><br />

                <input type="checkbox" name="entry-options" id="wd-media-recordings" className="form-control"/> 
                <label htmlFor="wd-media-recordings" className="form-label">Media Recordings</label><br />

                <input type="checkbox" name="entry-options" id="wd-student-annotation" className="form-control"/> 
                <label htmlFor="wd-student-annotation" className="form-label">Student Annotation</label><br />

                <input type="checkbox" name="entry-options" id="wd-file-upload" className="form-control"/> 
                <label htmlFor="wd-file-upload" className="form-label">File Uploads</label><br />
          
            </div><br />

            <div className="row">
           
                    <label htmlFor="wd-assign-to" className="form-label">Assign</label>
                    Assign to<br/>
                    <input id="wd-assign-to" className="form-control" value="Everyone" />

            </div><br />

            <div className="row">
        
                    Due<br />
                    <input type="date" id="wd-due-date" className="form-control" value="2024-05-13" />
        
            </div><br />

            <div className="row">
            
                    Available from<br/>
                    <input type="date" id="wd-available-from" className="form-control" value="2024-05-06" />
          
                    Until<br/>
                    <input type="date" id="wd-availaible-until" className="form-control" value="2024-05-20" />
    
            </div><br />
                
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

  