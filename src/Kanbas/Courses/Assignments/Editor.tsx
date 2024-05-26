export default function AssignmentEditor() {
    return (

        <div id="wd-assignments-editor">

            <label htmlFor="wd-name">Assignment Name</label><br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

            <textarea id="wd-description" cols={30} rows={10}>
                The assignment is available online. Submit a link to the landing page of your web application running on Netlify. The landing page should include the following: Your full name and section, Links to each of the lab assignments, Link the the Kanbas application, Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />

            <table>
                
                <tr>
                    <td align="center" valign="top">
                    <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                    <input id="wd-points" value={100} />
                    </td>
                </tr>
            
                {/* Complete on your own */}
                
            </table>

        </div>
    );
}

  