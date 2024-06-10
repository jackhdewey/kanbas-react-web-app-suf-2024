import { BsGearFill } from "react-icons/bs"
import { FaFileImport, FaFileExport } from "react-icons/fa6"
import { CiSearch } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";

export default function GradeControls() {
    return (
        <div id="wd-grade-controls" className="text-nowrap">

            <button id="wd-grade-settings" className="btn btn-lg btn-secondary btn-outline me-1 float-end">
                <BsGearFill className="position-relative" style={{ bottom: "1px" }} />
            </button> 

            <div className="dropdown">
                <button id="wd-grade-export" className="dropdown-toggle btn btn-lg btn-secondary btn-outline me-1 float-end">
                    <FaFileExport className="position-relative me-2" style={{ bottom: "1px" }} />
                    Export
                </button> 
            </div>

            <button id="wd-grade-import" className="btn btn-lg btn-secondary btn-outline me-1 float-end">
                <FaFileImport className="position-relative me-2" style={{ bottom: "1px" }} />
                Import
            </button>

            <br/> <br/>


            <div className="row">
                <div className="col-6">
                    <label htmlFor="wd-search-students" className="form-label">Student Names</label>
                    <CiSearch className="position-absolute" style={{top: "275px", left: "350px", width: "40px"}}/>
                    <input id="wd-search-students" type="text" className="form-control me-1" style={{height: "65px"}} placeholder="    Search...">
                    </input>
                </div>

                <div className="col-6">
                    <label htmlFor="wd-search-assignments" className="form-label">Assignment Names</label>
                    <CiSearch className="position-absolute" style={{top: "275px", left: "1100px", width: "40px"}}/>
                    <input id="wd-search-assignments" type="text" className="form-control me-1" style={{height: "65px"}} placeholder="    Search...">
                    </input>
                </div>

            </div>

            <br />
            
            <button id="wd-apply-filters" className="btn btn-lg btn-secondary btn-outline me-1 float-start">
                <FiFilter className="position-relative me-2" style={{ bottom: "1px" }} />
                Apply Filters
            </button>

        </div>
    );
} 