import GradeControls from "./GradeControls";

export default function Grades() {
    return (
        <div>

            <GradeControls /><br /><br /><br />
            
            <div className="table-responsive">

                <table className="table table-striped table-striped-columns table-bordered align-middle">

                    <thead>
                        <tr className="table-secondary text-center">
                            <th>Student Name</th>
                            <th>A1 SETUP</th>
                            <th>A2 HTML</th>
                            <th>A3 CSS</th>
                            <th>A4 BOOTSTRAP</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="table text-center">
                            <td><span className="text-danger">Jane Adams</span></td>
                            <td><input type="number" className="form-conrol" value="100" min="0" max="100" placeholder="100"></input></td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                        <tr className="table text-center">
                            <td><span className="text-danger">Christina Allen</span></td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                        <tr className="table text-center">
                            <td><span className="text-danger">Samreen Ansari</span></td><td>100%</td><td>100%</td><td>100%</td><td>100%</td>
                        </tr>
                        <tr className="table text-center">
                            <td><span className="text-danger">Han Bao</span></td><td>100%</td><td>100%</td><td>100%</td><td>100%</td>
                        </tr>
                        <tr className="table text-center">
                            <td><span className="text-danger">Mahi Sai Srinivas Bonnili</span></td><td>100%</td><td>100%</td><td>100%</td><td>100%</td>
                        </tr>
                        <tr className="table text-center">
                            <td><span className="text-danger">Siran Cao</span></td><td>100%</td><td>100%</td><td>100%</td><td>100%</td>
                        </tr>
                    </tbody>

                </table>
            </div>

        </div>
    );
}