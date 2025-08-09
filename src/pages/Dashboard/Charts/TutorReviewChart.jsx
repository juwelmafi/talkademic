import React, { useEffect, useState } from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const TutorReviewChart = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://talkademic-server.vercel.app/tutorials");
        const data = await res.json();
        setTutorials(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log(tutorials)

  // Group reviews by tutor name
  const reviewData = tutorials.reduce((acc, curr) => {
    const existing = acc.find((item) => item.name === curr.userName);
    const reviewCount = parseInt(curr.review) || 0;

    if (existing) {
      existing.value += reviewCount;
    } else {
      acc.push({ name: curr.userName, value: reviewCount });
    }
    return acc;
  }, []);

console.log(reviewData)

  return (
    <div className="shadow-lg p-4 rounded-xl border border-gray-200">
      <h3 className="text-sm font-semibold text-gray-600 mb-2">
        Reviews per Tutor
      </h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={reviewData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-xs mt-2">
        💬 Total reviews received by each tutor
      </p>
    </div>
  );
};

export default TutorReviewChart;
