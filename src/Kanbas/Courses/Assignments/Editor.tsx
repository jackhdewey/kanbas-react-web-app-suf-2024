export default function AssignmentEditor() {
    return (

        <div id="wd-assignments-editor">

            <label htmlFor="wd-name">
                <h3>Assignment Name</h3>
            </label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

            <textarea id="wd-description" cols={50} rows={10}>
                The assignment is available online. Submit a link to the landing page of your web application running on Netlify. The landing page should include the following: Your full name and section, Links to each of the lab assignments, Link the the Kanbas application, Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />

            <table>
                
                <tr>
                    <td align="center" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td align="center" valign="top">
                        <input id="wd-points" value={100} />
                    </td>
                </tr>

                <tr>
                    <td align="center" valign="top">
                        <label htmlFor="wd-group">Points</label>
                    </td>
                    <td align="center" valign="top">
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align="center" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td align="center" valign="top">
                        <select id="wd-display-grade-as">
                            <option value="PERCENTAGE">Percentange</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align="center" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td align="center" valign="top">
                        <select id="wd-submission-type">
                            <option value="ONLINE">Online</option>
                        </select>
                    </td>
                </tr>
            
                {/* Complete on your own */}
                
            </table>

        </div>
    );
}

  