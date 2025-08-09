import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import "./dashnav.css";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { AuthContext } from "../../../provider/AuthProvider";
import {
  FaChartBar,
  FaPlusSquare,
  FaPaperPlane,
  FaSignOutAlt,
  FaBookOpen,
  FaUsersCog,
  FaUserClock,
} from "react-icons/fa";
import useUserRole from "../../../hooks/useUserRole";
const DashNav = ({ isSidebarOpen, setSidebarOpen }) => {
  const { logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { role } = useUserRole();

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will miss some feature",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOutUser()
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            console.log(error.code);
          });
        toast.success("Logged out successfully!");
      }
    });
  };
  return (
    <aside
      className={`w-64 min-h-screen bg-white text-black lg:text-gray-400 lg:bg-transparent shadow-xl border-r border-gray-100 p-5 fixed z-50 top-0 left-0 h-full transition-transform duration-300
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
    >
      <div className="flex items-center">
        <div className="flex items-center justify-between gap-3">
          <Link to={"/"}>
            <img
              className="lg:w-44 mb-5 w-38"
              src="https://i.ibb.co/zLxBZgL/Talkademic.png"
              alt=""
            />
          </Link>
        </div>
        <button
          className="lg:hidden mt-1  text-xl absolute top-4 right-4"
          onClick={() => setSidebarOpen(false)}
        >
          ✕
        </button>
      </div>
      <nav className="space-y-3">
        <NavLink
          className="block hover:text-[#09A49A] font-semibold"
          to="/dashboard"
        >
          <FaChartBar className="inline-block mr-2" /> Dashboard
        </NavLink>

        {(role === "tutor" || role === "admin") && (
          <NavLink className="block hover:text-[#09A49A]" to="/my-tutorials">
            <FaBookOpen className="inline-block mr-2" /> My Tutorials
          </NavLink>
        )}

        {(role === "tutor" || role === "admin") && (
          <NavLink className="block hover:text-[#09A49A]" to="/add-tutorials">
            <FaPlusSquare className="inline-block mr-2" /> Add Tutorials
          </NavLink>
        )}

        {role === "user" && role !== "tutor" && role !== "admin" && (
          <NavLink
            className="block hover:text-[#09A49A]"
            to="/my-booked-tutors"
          >
            <FaPaperPlane className="inline-block mr-2" /> My Booked Tutors
          </NavLink>
        )}
        {role === "admin" && (
          <NavLink className="block hover:text-[#09A49A]" to="/pending-tutors">
            <FaUserClock className="inline-block mr-2" /> Pending Tutors
          </NavLink>
        )}
        {role === "admin" && (
          <NavLink className="block hover:text-[#09A49A]" to="/manage-users">
            <FaUsersCog className="inline-block mr-2" /> Manage Users
          </NavLink>
        )}

        <button
          onClick={handleLogOut}
          className="block cursor-pointer text-red-600 font-semibold"
        >
          <FaSignOutAlt className="inline-block mr-2" /> Logout
        </button>
      </nav>
    </aside>
  );
};

export default DashNav;
