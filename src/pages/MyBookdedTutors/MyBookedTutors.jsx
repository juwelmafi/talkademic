import React, { Suspense, useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookedItems from "./BookedItems";
import Loading from "../Loading/Loading";
import { myBookingsPromise } from "../../api/bookingAPI";

const MyBookedTutors = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="my-20 max-w-7xl mx-auto">
     <Suspense fallback={<Loading></Loading>}>
       <BookedItems
        myBookingsPromise={myBookingsPromise(user?.email, user.accessToken)}
      ></BookedItems>
     </Suspense>
    </div>
  );
};

export default MyBookedTutors;
