import React from "react";
import StatCards from "../StatCards/StatCards";
import TutorReviewChart from "../Charts/TutorReviewChart";
import CategoryPieChart from "../Charts/CategoryPieChart ";

const DashboardHome = () => {
  return (
    <div>
      <StatCards />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <TutorReviewChart />
        <CategoryPieChart />
      </div>
    </div>
  );
};

export default DashboardHome;
