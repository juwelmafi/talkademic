import { Suspense, useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyTutorialsList from "./MyTutorialsList";
import Loading from "../Loading/Loading";
import { myTutorialsPromise } from "../../api/tutorialsApi";

const MyTutorials = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-7xl mx-auto my-10">
      <h2 className="text-center text-3xl font-bold my-3">
        Tutorials created by you
      </h2>
      <p className="text-center w-[90%] md:w-[50%] mx-auto text-xs md:text-sm">
        Explore all the tutorials you’ve created on Talkademic. Manage, edit, or
        delete them easily and keep track of your shared knowledge with students
        across different subjects.
      </p>
      <Suspense fallback={<Loading></Loading>}>
        <MyTutorialsList
          myTutorialsPromise={myTutorialsPromise(user?.email, user.accessToken)}
        ></MyTutorialsList>
      </Suspense>
    </div>
  );
};

export default MyTutorials;
