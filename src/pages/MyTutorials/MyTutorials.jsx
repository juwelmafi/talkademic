import { Suspense, useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyTutorialsList from "./MyTutorialsList";
import Loading from "../Loading/Loading";
import { myTutorialsPromise } from "../../api/tutorialsApi";
import { useEffect } from "react";

const MyTutorials = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    document.title = `My tutorials | Talkademic`;
      window.scroll(0, 0)
    return () => {
      document.title = "Talkademic";
    };
  }, []);

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
