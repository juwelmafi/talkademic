import React from "react";
import { useEffect } from "react";
import { useState } from "react";

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
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">{tutorCount}+</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Tutors
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">{totalReviews}+</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Reviews
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">{langCount}+</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Languages
          </p>
        </div>
        <div class="text-center">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">{userCount}+</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Users
          </p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Stat;
