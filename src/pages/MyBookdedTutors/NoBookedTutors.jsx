import React from "react";

const NoBookedTutors = () => {
  return (
    <div className="flex justify-center flex-col gap-5 items-center max-w-7xl h-[65vh] px-1">
      <h2 className="text-5xl md:text-7xl font-bold text-center">Opps!</h2>
      <h2 className="text-2xl md:text-3xl font-thin text-center">
        You have not booked any tutor yet!
      </h2>
    </div>
  );
};

export default NoBookedTutors;
