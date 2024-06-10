import GradeControls from "./GradeControls";

export default function Grades() {
    return (
        <div>

            <GradeControls /><br /><br /><br />
            
            <div className="table-responsive">

                <table className="table table-striped table-striped-columns">

                    <thead>
                        <tr className="table-seconary"><th>Student Name</th><th>A1 SETUP</th><th>A2 HTML</th><th>A3 CSS</th><th>A4 BOOTSTRAP</th></tr>
                    </thead>

                    <tbody>
                        <tr className="table"><td>Jane Adams</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td></tr>
                        <tr className="table"><td>Christina Allen</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td></tr>
                        <tr className="table"><td>Samreen Ansari</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td></tr>
                        <tr className="table"><td>Han Bao</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td></tr>
                        <tr className="table"><td>Mahi Sai Srinivas Bonnili</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td></tr>
                        <tr className="table"><td>Siran Cao</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td></tr>
                    </tbody>

                </table>
            </div>

        </div>
    );
}