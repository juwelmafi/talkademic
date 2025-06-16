import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";
import { FaUserGraduate, FaGlobeAmericas, FaLanguage } from "react-icons/fa";

export default function TutorCard({ tutor }) {
  const { userName, userPhoto, language, description, review, _id, langPhoto } = tutor;
  return (
    <div className=" w-full mx-auto p-4">
      <div className=" p-4 border rounded-xl overflow-hidden transition hover:shadow-2xl hover:scale-[1.02] duration-300 shadow-md">
        <div className="flex items-start flex-col md:flex-row gap-1 md:gap-4">
          {/* Tutor Image */}
          <img
            src={userPhoto}
            alt="Tutor"
            className="w-full md:w-20 md:h-20 rounded-full object-cover"
          />

          {/* Tutor Info */}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold">{userName}</h2>
              <img
                src={langPhoto}
                alt="PL"
                className="w-4 h-3"
              />
            </div>

            <ul className="text-sm mt-1 space-y-1">
              <li className="flex items-center gap-2 text-xs">
                <FaLanguage /> {language}
              </li>
            </ul>

            <p className="mt-2 text-sm line-clamp-2">
              {description}
            </p>
          </div>

          {/* Ratings and Button */}
          <div className="flex flex-col items-end justify-between">
            <div className="flex items-center gap-1 text-xs font-medium">
              <FaStar className="text-yellow-500"/>
              <span>{review} reviews</span>
            </div>
          </div>
        </div>
        <Link to={`/tutor-details/${_id}`}>
          <button className="mt-4 w-full bg-indigo-400 hover:bg-[#09A49A] cursor-pointer text-white px-4 py-1.5 text-sm rounded-md">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
