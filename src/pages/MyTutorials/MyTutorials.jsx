import { Suspense, useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyTutorialsList from "./MyTutorialsList";
import Loading from "../Loading/Loading";
import { myTutorialsPromise } from "../../api/tutorialsApi";

const MyTutorials = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-7xl mx-auto my-10">
      <Suspense fallback={<Loading></Loading>}>
        <MyTutorialsList
          myTutorialsPromise={myTutorialsPromise(user?.email, user.accessToken)}
        ></MyTutorialsList>
      </Suspense>
    </div>
  );
};

export default MyTutorials;
