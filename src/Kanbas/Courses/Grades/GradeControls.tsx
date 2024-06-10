import { CiSearch } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";

export default function GradeControls() {
    return (
        <div id="wd-assignment-controls" className="text-nowrap">

            <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end">
                <FiFilter className="position-relative me-2" style={{ bottom: "1px" }} />
            </button> 

            <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">
                <FiFilter className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </button>
      
            <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end">
                <FiFilter className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </button> 

            <br/> <br/> <br />
     

            <div className="row">
                <div className="col">
                    <label htmlFor="wd-search-students" className="form-label">Student Names</label>
                    <CiSearch className="position-absolute" style={{top: "300px", left: "350px", width: "40px"}}/>
                    <input id="wd-search-students" type="text" className="form-control me-1" style={{height: "65px", width: "400px"}} placeholder="    Search...">
                    </input>
                </div>

                <div className="col">
                    <label htmlFor="wd-search-assignments" className="form-label">Assignment Names</label>
                    <CiSearch className="position-absolute" style={{top: "300px", left: "1100px", width: "40px"}}/>
                    <input id="wd-search-assignments" type="text" className="form-control me-1" style={{height: "65px", width: "400px"}} placeholder="    Search...">
                    </input>
                </div>

            </div>

            <br />
            
            <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-start">
                <FiFilter className="position-relative me-2" style={{ bottom: "1px" }} />
                Apply Filters
            </button>

        </div>
    );
} 