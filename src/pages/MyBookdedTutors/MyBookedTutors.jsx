import React, { Suspense, useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookedItems from "./BookedItems";
import Loading from "../Loading/Loading";
import { myBookingsPromise } from "../../api/bookingAPI";

const MyBookedTutors = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="my-20 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold my-3">
        Tutors Booked by you
      </h2>
      <p className="text-center w-[90%] md:w-[50%] mx-auto text-xs md:text-sm">
        View all the tutorials you’ve booked on Talkademic. Track upcoming sessions, review tutor details, and manage your learning schedule in one convenient place.
      </p>
     <Suspense fallback={<Loading></Loading>}>
       <BookedItems
        myBookingsPromise={myBookingsPromise(user?.email, user.accessToken)}
      ></BookedItems>
     </Suspense>
    </div>
  );
};

export default MyBookedTutors;
