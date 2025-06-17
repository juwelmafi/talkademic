import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import "./navbar.css";
import NavButtons from "./NavButtons";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/find-tutors"}>Find Tutors</NavLink>
      </li>
      <li>
        <NavLink to={"/add-tutorials"}>Add Tutorials</NavLink>
      </li>
      <li>
        <NavLink to={"/my-tutorials"}>My Tutorials</NavLink>
      </li>
      <li>
        <NavLink to={"/my-booked-tutors"}>My booked Tutors</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will miss some feature!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logged me out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOutUser()
          .then(() => {
            toast.success("Logged out successfully");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  // Theme Toggle //

  useEffect(() => {
    // Get saved theme or default to light
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-10">
      <div className="navbar  max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
              <div className="mt-2">{!user && <NavButtons></NavButtons>}</div>
            </ul>
          </div>
          <Link to={"/"}>
            <img
              className="lg:w-44 w-52"
              src="https://i.ibb.co/zLxBZgL/Talkademic.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">{links}</ul>
        </div>
        <div
          className={
            user
              ? "navbar-end cursor-pointer"
              : "navbar-end cursor-pointer"
          }
        >
          <div className="flex gap-2 items-center">
            <label className="swap swap-rotate cursor-pointer">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
                onChange={toggleTheme}
                checked={theme === "dark"}
              />

              {/* sun icon */}
              <svg
                className="swap-off h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            <div>
              {user ? (
                <div>
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="m-1">
                      <div className="avatar">
                        <div className="ring-indigo-400 ring-offset-base-100 w-9 rounded-full ring-2 ring-offset-2">
                          <img src={user.photoURL} />
                        </div>
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 -ml-40 rounded-box z-1 w-52 text-sm p-2 shadow-sm space-y-2"
                    >
                      <p className="bg-green-100 w-full px-3 py-0.5 text-center rounded border border-green-600 text-green-600">
                        {user.displayName}
                      </p>

                      <li>
                        <button
                          onClick={handleLogOut}
                          className="btn btn-sm text-center w-full text-white rounded-4xl overflow-hidden group bg-indigo-400 relative hover:bg-gradient-to-r hover:from-[#09A49A] hover:to-[#08988e] text-base-100 hover:ring-2 hover:ring-offset-2 hover:ring-[#09A49A] transition-all ease-out duration-300"
                        >
                          <span className="absolute text-center right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                          <span className="relative text-center w-full">
                            Log out
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="hidden lg:flex">
                  <NavButtons></NavButtons>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
