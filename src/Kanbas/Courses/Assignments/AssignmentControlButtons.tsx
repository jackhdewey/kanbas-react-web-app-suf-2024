import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa"
import GreenCheckmark from "../Modules/GreenCheckmark";
import ConfirmDelete from "./ConfirmDelete";

export default function AssignmentControlButtons({aid, deleteAssignment} : {
    aid: string; 
    deleteAssignment: (id: string) => void; 
    }) {
    return (
        <div onClick={() => console.log(aid)} 
            className="float-end text-nowrap">
            <FaTrash className="text-danger me-2 mb-1" data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog"/>
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />

            <ConfirmDelete 
                dialogTitle="Confirm Delete" 
                aid={aid} 
                removeAssignment={deleteAssignment} />
        </div>
    );
}