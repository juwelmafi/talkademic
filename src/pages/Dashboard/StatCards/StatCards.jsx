import React, { useEffect, useState } from "react";
import { FaChalkboardTeacher, FaComments, FaGlobe, FaUsers } from "react-icons/fa";
import { Link } from "react-router";

const StatCards
 = () => {
  const [tutorials, setTutorials] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tutorialRes = await fetch("https://talkademic-server.vercel.app/tutorials");
        const tutorialData = await tutorialRes.json();

        const userRes = await fetch("https://talkademic-server.vercel.app/users");
        const userData = await userRes.json();

        setTutorials(tutorialData);
        setUsers(userData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // Stats calculations
  const langCount = new Set(tutorials.map((lang) => lang.language)).size;
  const tutorCount = new Set(tutorials.map((tutorial) => tutorial.userEmail)).size;
  const userCount = users.length;
  const totalReviews = tutorials.reduce(
    (sum, data) => sum + parseInt(data.review || 0),
    0
  );

  return (
    <div className="space-y-6 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Tutors */}
        <div className="shadow-lg p-4 border border-gray-200 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="text-orange-500 text-2xl">
              <FaChalkboardTeacher />
            </div>
            <div className="text-right">
              <p className="text-sm">Total Tutors</p>
              <h3 className="text-lg font-bold">{tutorCount}</h3>
            </div>
          </div>
          <Link to="/find-tutors" className="text-xs text-orange-500 mt-2">
            👨 View all tutors...
          </Link>
        </div>

        {/* Reviews */}
        <div className="shadow-lg p-4 border border-gray-200 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="text-green-500 text-2xl">
              <FaComments />
            </div>
            <div className="text-right">
              <p className="text-sm">Total Reviews</p>
              <h3 className="text-lg font-bold">{totalReviews}</h3>
            </div>
          </div>
          <Link className="text-xs text-green-500 mt-2">
            💬 People says us...
          </Link>
        </div>

        {/* Languages */}
        <div className="shadow-lg p-4 border border-gray-200 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="text-sky-500 text-2xl">
              <FaGlobe />
            </div>
            <div className="text-right">
              <p className="text-sm">Languages</p>
              <h3 className="text-lg font-bold">{langCount}</h3>
            </div>
          </div>
          <Link to="/" className="text-xs text-sky-500 mt-2">
            🌍 Explore languages...
          </Link>
        </div>

        {/* Users */}
        <div className="shadow-lg p-4 border border-gray-200 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="text-purple-500 text-2xl">
              <FaUsers />
            </div>
            <div className="text-right">
              <p className="text-sm">Total Users</p>
              <h3 className="text-lg font-bold">{userCount}</h3>
            </div>
          </div>
          <Link to="/users" className="text-xs text-purple-500 mt-2">
            👥 Manage users...
          </Link>
        </div>

      </div>
    </div>
  );
};

export default StatCards
;
