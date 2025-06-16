import React, { use } from "react";
import BookedCard from "./bookedCard";

const BookedItems = ({ myBookingsPromise }) => {
  const tutors = use(myBookingsPromise);

  return (
    <div className="mt-10">
      {tutors.map((tutor) => (
        <BookedCard key={tutor._id} tutor={tutor}></BookedCard>
      ))}
    </div>
  );
};

export default BookedItems;
