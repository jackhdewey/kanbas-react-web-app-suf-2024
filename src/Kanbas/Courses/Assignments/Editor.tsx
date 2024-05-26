export default function AssignmentEditor() {
    return (

        <div id="wd-assignments-editor">

            <label htmlFor="wd-name">
                <h3>Assignment Name</h3>
            </label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

            <textarea id="wd-description" cols={50} rows={10}>
                The assignment is available online. Submit a link to the landing page of your web application running on Netlify. The landing page should include the following: Your full name and section, Links to each of the lab assignments, Link the the Kanbas application, Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
            </textarea><br /><br />


            <table>
                
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="PERCENTAGE">Percentange</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="ONLINE">Online</option>
                        </select>
                    </td>
                </tr>
            
                <tr>
                    <td align="right" valign="top">
                        <label>Online Entry Options:</label><br />
                        <input type="checkbox" name="entry-options" id="wd-text-entry"/> 
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" name="entry-options" id="wd-website-url"/> 
                        <label htmlFor="wd-website-url">Website URL</label><br />

                        <input type="checkbox" name="entry-options" id="wd-media-recordings"/> 
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                        <input type="checkbox" name="entry-options" id="wd-student-annotation"/> 
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                        <input type="checkbox" name="entry-options" id="wd-file-upload"/> 
                        <label htmlFor="wd-file-upload">File Uploads</label><br />
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign To</label>
                    </td>
                    <td>
                        <input id="wd-assign-to" value="Everyone" />
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date">Assign To</label>
                    </td>
                    <td>
                        Assign to<br/>
                        <input type="date" id="wd-due-date" value="2024-05-13" />
                    </td>
                </tr>

                <tr>
                    <td align="right">
                        Due<br/>
                        <input type="date" id="wd-due-date" value="2024-05-13" />
                    </td>
                </tr>

                <tr>
                    <td align="right">
                        Available from<br/>
                        <input type="date" id="wd-due-date" value="2024-05-13" />
                    </td>
                    <td>
                        Until<br/>
                        <input type="date" id="wd-due-date" value="2024-05-13" />
                    </td>
                </tr>
                
                <hr />

                <button id="wd-cancel" type="button">
                    Cancel
                </button>

                <button id="wd-save" type="button">
                    Save
                </button>    
                
            </table>

        </div>
    );
}

  