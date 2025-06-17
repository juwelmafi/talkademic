import React from "react";
import { useEffect } from "react";
import { Link } from "react-router";

const NoBookedTutors = () => {
  useEffect(() => {
    document.title = `Home | Talkademic`;
    window.scroll(0, 0);
    return () => {
      document.title = "Talkademic";
    };
  }, []);
  return (
    <div className="flex justify-center flex-col gap-5 items-center max-w-7xl h-[65vh] px-1">
      <h2 className="text-5xl md:text-7xl font-bold text-center">Opps!</h2>
      <h2 className="text-2xl md:text-3xl font-thin text-center">
        You have not booked any tutor yet!
      </h2>

      <Link
        to={"/find-tutors"}
        className="rounded-4xl px-6 py-2 overflow-hidden group bg-indigo-400 relative hover:bg-gradient-to-r hover:from-[#09A49A] hover:to-[#08988e] text-base-100 hover:ring-2 hover:ring-offset-2 hover:ring-[#09A49A] transition-all ease-out duration-300"
      >
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative">Book now</span>
      </Link>
    </div>
  );
};

export default NoBookedTutors;
