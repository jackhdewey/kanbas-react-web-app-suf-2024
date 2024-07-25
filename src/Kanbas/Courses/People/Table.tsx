import React, { useState, useEffect } from "react";
import * as client from "./client";
export default function PeopleTable() {
    const [ users, setUsers ] = useState<any[]>([]);
    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div id = "wd-people-table">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: any) => (
                        <tr key={user._id}>
                            <td className="wd-full-name text-nowrap">
                                <span className="wd-first-name">{user.firstName}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}