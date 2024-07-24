import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa"
// import GreenCheckmark from "../Modules/GreenCheckmark";
// import ConfirmDelete from "./ConfirmDelete";


export default function AssignmentControlButtons({aid, deleteAssignment} : {
    aid: string; 
    deleteAssignment: (id: string) => void; 
    }) {
    return (
        <div //onClick={() => deleteAssignment(aid)/}
            className="float-end text-nowrap">
            <FaTrash 
            onClick={() => {
                const remove = window.confirm(`Remove assignment ${aid}`)
                if (remove) {
                    deleteAssignment(aid)}
                }
            
            }
            
            className="text-danger me-2 mb-1" />
            {/* <GreenCheckmark /> */}
            <IoEllipsisVertical className="fs-4" />
        
            {/* <ConfirmDelete 
                dialogTitle="Confirm Delete" 
                aid={aid} 
                removeAssignment={deleteAssignment} />  */}

        </div>
    );
}