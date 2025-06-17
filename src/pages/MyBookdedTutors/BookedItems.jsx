import React, { use } from "react";
import BookedCard from "./bookedCard";

const BookedItems = ({ myBookingsPromise }) => {
  const tutors = use(myBookingsPromise);

  

  return (
    <div>
      <h2 className="text-center text-2xl md:text-3xl font-bold my-3">
        Tutors Booked by you
      </h2>
      <p className="text-center w-[90%] md:w-[60%] lg:w-[50%] mx-auto text-xs md:text-sm">
        View all the tutorials you’ve booked on Talkademic. Track upcoming
        sessions, review tutor details, and manage your learning schedule in one
        convenient place.
      </p>
      <div className="mt-10">
        {tutors.map((tutor) => (
          <BookedCard key={tutor._id} tutor={tutor}></BookedCard>
        ))}
      </div>
    </div>
  );
};

export default BookedItems;
