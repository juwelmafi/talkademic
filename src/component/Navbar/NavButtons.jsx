import React from "react";
import { Link } from "react-router";

const NavButtons = () => {
  return (
    <div className=" flex items-center gap-2">
      <Link
        to={"/login"}
        className="rounded-4xl px-5 py-1.5 overflow-hidden group bg-indigo-400 relative hover:bg-gradient-to-r hover:from-[#09A49A] hover:to-[#08988e] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#09A49A] transition-all ease-out duration-300"
      >
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative">Log in</span>
      </Link>
      <Link
        to={"/register"}
        className="rounded-4xl px-5 py-1.5 overflow-hidden group bg-indigo-400 relative hover:bg-gradient-to-r hover:from-[#09A49A] hover:to-[#08988e] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#09A49A] transition-all ease-out duration-300"
      >
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative">Register</span>
      </Link>
    </div>
  );
};

export default NavButtons;
