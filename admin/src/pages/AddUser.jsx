import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { backendUrl } from "../App";

const AddUser = ({ token }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(backendUrl + "/api/admin/create", formData, {
        headers: { token },
      });

      if (response.data.success) {
        toast.success("User added successfully");
        setFormData({ name: "", email: "", password: "", role: "user" }); // Reset form
      }
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error("Failed to add user. Please try again.");
    }
  };

  return (
    <div className="flex h-full justify-center items-center">
      <form
        onSubmit={handleAddUser}
        className="h-full py-32 flex flex-col gap-4 w-8/12">
        <input
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
          type="text"
          placeholder="Name"
          className="border p-2 rounded"
        />
        <input
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
        />
        <input
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          value={formData.password}
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
        />
        <select
          name="role"
          className="border p-2 rounded"
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          value={formData.role}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="bg-blue-400 text-white p-2 rounded">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
