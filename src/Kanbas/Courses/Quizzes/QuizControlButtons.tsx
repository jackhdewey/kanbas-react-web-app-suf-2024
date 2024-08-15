import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa"
import { FaRegEdit } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";
// import ConfirmDelete from "./ConfirmDelete";

export default function QuizControlButtons({aid, deleteQuiz} : {
    aid: string; 
    deleteQuiz: (id: string) => void; 
    }) {
    return (
        <div //onClick={() => deleteQuiz(aid)/}
            className="float-end text-nowrap">
        
            <GreenCheckmark/>
            <FaRegEdit className="text-success me-2 fs-3"/>
            <FaTrash className="text-danger me-2 mb-1"
                onClick={() => {
                    const remove = window.confirm(`Remove quiz ${aid}`)
                    if (remove) {
                        deleteQuiz(aid)}
                    }
                
                }/>
            <IoEllipsisVertical className="fs-4" />
        
            {/* <ConfirmDelete 
                dialogTitle="Confirm Delete" 
                aid={aid} 
                removeQuiz={deleteQuiz} />  */}

        </div>
    );
}