import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CountUp from 'react-countup';


const Stat = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tutorialRes = await fetch("https://talkademic-server.vercel.app/tutorials");
        const tutorialData = await tutorialRes.json();

        const userRes = await fetch("https://talkademic-server.vercel.app/users");
        const userData = await userRes.json();

        setData(tutorialData);
        setUser(userData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // langCunt //

  const langCount = new Set(data.map((lang) => lang.language)).size;

  //tutorCouont //

  const tutorCount = new Set(data.map((tutorial) => tutorial.userEmail)).size;

  // userCount //

  const userCount = new Set(user.map((u) => u.user)).size;

  // review Count //

  const totalReviews = data.reduce((sum, data) => sum + parseInt(data.review), 0);
  // console.log(totalReviews)

  return (
   <div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-2 gap-10 md:gap-0 row-gap-8 md:grid-cols-4">
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl"><CountUp enableScrollSpy={true} scrollSpyDelay={0} suffix="+" end={tutorCount} duration={5}></CountUp></h6>
          <p className="text-sm font-medium tracking-widest  uppercase lg:text-base">
            Tutors
          </p>
        </div>
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl"><CountUp enableScrollSpy={true} scrollSpyDelay={0} suffix="+" end={totalReviews} duration={5}></CountUp></h6>
          <p className="text-sm font-medium tracking-widest  uppercase lg:text-base">
            Reviews
          </p>
        </div>
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl"><CountUp enableScrollSpy={true} scrollSpyDelay={0} suffix="+" end={langCount} duration={5}></CountUp></h6>
          <p className="text-sm font-medium tracking-widest  uppercase lg:text-base">
            Languages
          </p>
        </div>
        <div className="text-center">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl"><CountUp enableScrollSpy={true} scrollSpyDelay={0} suffix="+" end={userCount} duration={5}></CountUp></h6>
          <p className="text-sm font-medium tracking-widest  uppercase lg:text-base">
            Users
          </p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Stat;
