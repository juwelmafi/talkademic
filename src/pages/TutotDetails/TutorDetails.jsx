import React, { useContext } from "react";
import { FaStar } from "react-icons/fa6";
import { useLoaderData } from "react-router";
import axios from "axios";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router";
import { FaUserGraduate, FaGlobeAmericas, FaLanguage } from "react-icons/fa";
import { toast } from 'react-hot-toast';


const TutorDetails = () => {
  const tutor = useLoaderData();
  const { user } = useContext(AuthContext);
  const { userName, userPhoto, language, description, review, _id, price } = tutor;

  const bookedUserEmail = user?.email;
  const handleBookNow = (tutorialId) => {
    axios
      .post("https://talkademic-server.vercel.app/booked-tutors", {
        tutorialId,
        bookedUserEmail,
      })
      .then(() => {
        // console.log(res.data);
        toast.success(`${userName} successfully booked`)
      });
  };

  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className=" w-full mx-auto p-4 flex justify-center items-center">
        <div className="flex items-start gap-4 border rounded-xl shadow-md w-[70%] p-8">
          {/* Tutor Image */}
          <img
            src={userPhoto}
            alt="Tutor"
            className="w-20 h-20 rounded-full object-cover"
          />

          {/* Tutor Info */}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold">{userName}</h2>
              <img
                src="https://flagcdn.com/w40/pl.png"
                alt="PL"
                className="w-4 h-4"
              />
              <span className="text-xs text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full">
                Super tutor
              </span>
            </div>

            <ul className="text-sm mt-1  space-y-1">
              <li className="flex items-center gap-2">
                <FaLanguage className="" /> {language}
              </li>
              <li className="flex items-center gap-2">
                <FaUserGraduate className="" /> {review} active students
                · 2,712 lessons
              </li>
              <li className="flex items-center gap-2">
                <FaGlobeAmericas className="" /> Speaks {language} (Proficient), Polish (Native)
              </li>
            </ul>

            <p className="mt-2 text-sm">
              Descripton: {description}
            </p>
          </div>

          {/* Ratings and Button */}
          <div className="flex flex-col items-end justify-between">
            <div className="flex items-center gap-1 text-sm font-medium ">
              <FaStar className="text-yellow-500"/>
              <span>{review} reviews</span>
            </div>
            <div className="text-right mt-1">
              <p className="font-bold text-md">USD ${price}</p>
              <p className="text-xs ">50-min lesson</p>
            </div>

            <button
              onClick={() => handleBookNow(_id)}
              className="mt-4 bg-indigo-400 hover:bg-[#09A49A] cursor-pointer text-white px-4 py-1.5 text-sm rounded-md"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;
