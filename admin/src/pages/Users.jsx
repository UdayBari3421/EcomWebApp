import axios from "axios";
import React, { useEffect, useState } from "react";

import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Users = ({ token }) => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await axios.get(backendUrl + "/api/admin/getAllUsers", { headers: { token } });
    setUsers(response.data.allUsers);
    console.log(response.data.allUsers);
  };

  const handleDeleteUser = async (userId) => {
    const response = await axios.delete(backendUrl + "/api/admin/removeUser", {
      headers: { token },
      data: { userId },
    });

    // update the users list after deletion
    if (response.data.success) {
      setUsers(users.filter((user) => user._id !== userId));
      toast.success("User deleted successfully");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex gap-3 flex-col w-full">
      {users.map((user, ind) => (
        <div
          key={ind}
          className="flex justify-between items-center p-3 rounded-lg border bg-slate-800 text-white">
          <span className="flex flex-col gap-1">
            <div className="text-lg font-semibold">
              <p>{user.name}</p>
            </div>
            <p className="text-sm">{user.email}</p>
          </span>
          <span className="flex items-center justify-center">
            <p className="text-center hover:bg-slate-600 cursor-pointer border-fuchsia-400 w-[100px] border rounded-full m-2 px-5 py-2">
              {user.isAdmin ? "Admin" : "User"}
            </p>
            <button
              className="w-[100px] font-bold hover:bg-white hover:text-red-400 hover:border hover:border-red-400 bg-red-400 text-gray-700 rounded-full px-3 py-2"
              onClick={() => handleDeleteUser(user._id)}>
              Delete
            </button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
