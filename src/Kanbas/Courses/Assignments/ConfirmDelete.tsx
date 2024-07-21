import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import * as client from "./client";

export default function ConfirmDelete({ dialogTitle, aid }: { dialogTitle: string; aid: string; }) {
    
    const dispatch = useDispatch();
    const removeAssignment = async (assignmentId: string) => {
        await client.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    }

    return (
        <div id="wd-add-module-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">

            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h1 
                            className="modal-title fs-5" 
                            id="staticBackdropLabel">
                            {dialogTitle} 
                        </h1>
                        <button 
                            type="button" 
                            className="btn-close" 
                            data-bs-dismiss="modal">
                        </button>
                    </div>

                    <div className="modal-body word-wrap">
                        Are you sure you want to delete this?
                    </div>

                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-secondary" 
                            data-bs-dismiss="modal"> 
                            Cancel 
                        </button>
                        <button 
                            type="button"
                            onClick={() => removeAssignment(aid)}  
                            className="btn btn-danger"
                            data-bs-dismiss="modal">
                            Ok 
                        </button>
                    </div>
                    
                </div>
            </div>

        </div>
    );
}