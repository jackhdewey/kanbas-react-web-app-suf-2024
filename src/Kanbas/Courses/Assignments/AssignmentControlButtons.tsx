import { useDispatch } from "react-redux";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa"
import GreenCheckmark from "../Modules/GreenCheckmark";
import { deleteAssignment } from "./reducer";

export default function AssignmentControlButtons({aid}: {aid: string; }) {
    const dispatch = useDispatch();
    return (
        <div className="float-end text-nowrap">
            <FaTrash className="text-danger me-2 mb-1" onClick={() => dispatch(deleteAssignment(aid))}/>
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}