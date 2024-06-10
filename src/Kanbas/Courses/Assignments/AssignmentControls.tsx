import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function AssignmentControls() {
  return (
    <div id="wd-assignment-controls" className="text-nowrap">
        <div>
            <CiSearch className="position-absolute" style={{top: "170px", width: "40px"}}/>
            <input id="wd-search-assignment" type="text" className="form-control me-1 float-start" style={{height: "65px", width: "400px"}} placeholder="    Search...">
            </input>
        </div>

        <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
        </button>

        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
        </button>

    </div>
  );
}