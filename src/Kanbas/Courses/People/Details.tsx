import { useEffect, useState } from "react";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import * as client from "./client";

export default function PeopleDetails({ fetchUsers } : { fetchUsers: () => void; }) {

    const { cid, uid } = useParams();

    const [user, setUser] = useState<any>({});
    const fetchUser = async () => {
        if (!uid) return;
        const user = await client.findUserById(uid);
        setUser(user);
        setName(`${user.firstName} ${user.lastName}`);
        setEmail(`${user.email}`);
        setRole(`${user.role}`);
    };
    useEffect(() => {
        if (uid) fetchUser();
    }, [uid]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [editing, setEditing] = useState(false);
    const saveUser = async () => {
      const [firstName, lastName] = name.split(" ");
      const updatedUser = { ...user, firstName, lastName, email, role};
      await client.updateUser(updatedUser);
      setUser(updatedUser);
      setEditing(false);
      fetchUsers();
      navigate(`/Kanbas/Courses/${cid}/People`);
    };

    const navigate = useNavigate();
    const deleteUser = async (uid: string) => {
        await client.deleteUser(uid);
        fetchUsers();
        navigate(`/Kanbas/Courses/${cid}/People`);
    }

    if (!uid) return null;
    return (
        <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">

            <Link to={`/Kanbas/Courses/${cid}/People`} 
                className="btn position-fixed end-0 top-0 wd-close-details">
                <IoCloseSharp className="fs-1" /> 
            </Link>
            <div className="text-center mt-2"> 
                <FaUserCircle className="text-secondary me-2 fs-1" /> 
            </div>

            <hr />

            <div className="text-danger fs-4 wd-name"> 
                {!editing && (
                    <FaPencil className="float-end fs-5 mt-2 wd-edit"
                        onClick={() => {
                            setEditing(true); 
                            setName(`${user.firstName} ${user.lastName}`);
                            setEmail(`${user.email}`);
                            setRole(`${user.role}`);
                        }}/> 
                )}
                {!editing && (
                    <div className="wd-name"
                        onClick={() => setEditing(true)}>
                        {user.firstName} {user.lastName}
                    </div>)}
                {editing && (
                    <FaCheck onClick={() => saveUser()}
                        className="float-end fs-5 mt-2 me-2 wd-save" /> )}
                {user && editing && (
                    <input className="form-control w-50 wd-edit-name"
                        value={`${user.firstName} ${user.lastName}`}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") { 
                                saveUser(); 
                            }
                        }}
                    />
                )}
            </div>

            <b>Email:</b>
            {!editing && (<span className="wd-email"> {user.email} <br /> </span> )}
            {editing && (
                <input className="form-control w-50 wd-edit-name"
                    value={user.email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") { 
                            saveUser(); 
                        }
                    }}
                />
            )} 

            <b>Roles:</b> 
            {!editing && (<span className="wd-roles"> {user.role} <br /> </span> )}
            {editing && (
                <select value={user.role} onChange={(e) => setRole(e.target.value)}
                    className="form-select w-50 wd-select-role" >
                    <option value="">All Roles</option>        
                    <option value="STUDENT">Students</option>
                    <option value="TA">Assistants</option>     
                    <option value="FACULTY">Faculty</option>
                </select>
            )} 
            
            <b>Login ID:</b>  <span className="wd-login-id">  {user.loginId}  </span> <br />
            <b>Section:</b>  <span className="wd-section">  {user.section}  </span> <br />
            <b>Total Activity:</b> <span className="wd-total-activity"> {user.totalActivity} </span> 

            <hr />

            <button className="btn btn-danger float-end wd-delete"
                onClick={() => {
                    setEditing(false);
                    deleteUser(uid);
                }}> 
                Delete 
            </button>
            <button className="btn btn-secondary float-start float-end me-2 wd-cancel"
                onClick={() => {
                    setEditing(false);
                    navigate(`/Kanbas/Courses/${cid}/People`);
                }}> 
                Cancel 
            </button>

        </div> 
        
    ); 
}