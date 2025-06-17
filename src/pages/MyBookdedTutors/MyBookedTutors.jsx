import React, { Suspense, useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookedItems from "./BookedItems";
import Loading from "../Loading/Loading";
import { myBookingsPromise } from "../../api/bookingAPI";
import { useEffect } from "react";

const MyBookedTutors = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
      document.title = `My booked tutors | Talkademic`;
      window.scroll(0, 0)
      return () => {
        document.title = "Talkademic";
      };
    }, []);
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
