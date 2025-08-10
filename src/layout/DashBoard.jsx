import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import DashNav from "../pages/Dashboard/DashNav/DashNav";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from "react-tooltip";
const DashBoard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    document.title = `Dashboard | Talkademic`;
    return () => {
      document.title = "Talkademic";
    };
  }, []);

  // Theme Toggle //

  const [theme, setTheme] = useState("light");

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
    <div className="">
      <div className="flex">
        {/* Sidebar */}
        <div className={`${isSidebarOpen ? "block" : "hidden"} lg:block`}>
          <DashNav
            isSidebarOpen={isSidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        </div>

        {/* Main Content */}
        <div className="w-full overflow-x-hidden min-h-screen lg:p-0 lg:ml-64 relative">
          {/* Navbar */}
          <div className="bg-[#09A49A]">
            <div className="w-full flex justify-between items-center px-5 py-2 ">
              {/* Toggle Button */}
              <button
                onClick={() => setSidebarOpen(!isSidebarOpen)}
                className="lg:hidden text-2xl"
              >
                <FaBars className="text-white" />
              </button>
              <div className="flex-1 text-white font-bold text-2xl text-center">
                Dashboard
              </div>
              <div className="space-x-2 flex">
                <div>
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="m-1">
                      <div className="avatar">
                        <div className="w-9 rounded-full">
                          <img src={user?.photoURL} />
                        </div>
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 -ml-40 rounded-box z-1 w-52 text-sm p-2 shadow-sm space-y-2"
                    >
                      <p
                        className="bg-green-100 w-full px-3 py-0.5 text-center rounded border border-green-600 text-green-600"
                        data-tooltip-id="user-tooltip"
                        data-tooltip-content={user?.email}
                      >
                        {user?.displayName}
                      </p>
                      <Tooltip id="user-tooltip" place="left" />
                    </ul>
                  </div>
                </div>
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
                    className="swap-off h-8 w-8 fill-white"
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
              </div>
            </div>
          </div>

          <div className="px-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
