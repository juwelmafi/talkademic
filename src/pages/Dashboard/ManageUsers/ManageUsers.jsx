import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import toast from "react-hot-toast"; // adjust path
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import Loading from "../../Loading/Loading";

const ManageUsers = () => {
  const [roleFilter, setRoleFilter] = useState("all");

  // Fetch users
  const { data: users = [], refetch, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("https://talkademic-server.vercel.app/users");
      return res.data;
    },
  });

  console.log(users)

  useEffect(() => {
    document.title = `Manage Users | Talkademic`;
    return () => {
      document.title = "Talkademic";
    };
  }, []);

  const handleRoleChange = async (userId, newRole) => {
    try {
      const res = await axios.patch(`https://talkademic-server.vercel.app/users/${userId}/role`, {
        role: newRole,
      });
      if (res.data.modifiedCount > 0) {
        toast.success(`User role updated to ${newRole}`);
        refetch();
      }
    } catch (err) {
      toast.error("Failed to update role");
      console.error(err);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="mx-auto w-full px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-[#09A49A]">Manage Users</h2>

      {/* Role Filter */}
      <div className="flex justify-end mb-4">
        <select
          className="select select-bordered select-sm"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="all">All Roles</option>
          <option value="user">User</option>
          <option value="tutor">Tutor</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-sky-50 text-[#09A49A]">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter(
                (user) => roleFilter === "all" || user.role === roleFilter
              )
              .map((user, index) => (
                <tr key={user._id} className="text-xs md:text-sm">
                  <td>{index + 1}</td>
                  <td>{user.name || "Unknown"}</td>
                  <td>{user.email}</td>
                  <td>
                    <select
                      className="select select-bordered select-sm"
                      value={user.role}
                      onChange={(e) =>
                        handleRoleChange(user._id, e.target.value)
                      }
                    >
                      <option value="user">User</option>
                      <option value="tutor">Tutor</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
