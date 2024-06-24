import { useParams } from "react-router-dom";
import GradeControls from "./GradeControls";
import * as db from "../../Database";

export default function Grades() {
    const { cid } = useParams();
    const assignments = db.assignments;

    const enrollments = db.enrollments;
    const students = enrollments.filter((enrollment) => enrollment.course === cid);
    const student_ids = students.map((student) => student.user)

    const users = db.users;
    const enrolled_students = users.filter((user) => student_ids.includes(user._id));

    const grades = db.grades;

    return (
        <div>

            <GradeControls /><br /><br /><br />
            
            <div className="table-responsive">

                <table className="table table-striped table-striped-columns table-bordered align-middle">

                    <thead>
                        <tr className="table-secondary text-center">
                            <th>Student Name</th>
                            {
                                assignments.map((assignment) => <th>{assignment._id}</th>)
                            }
                        </tr>
                    </thead>

                    <tbody>
                        {enrolled_students.map((st) => 
                            <tr className="table text-center">
                                <td><span className="text-danger">{st.firstName} {st.lastName}</span></td>
                                {grades.filter((record) => record.student === st._id).map((record) => <td>{record.grade}</td>) }
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>

        </div>
    );
}