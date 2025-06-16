import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [tutorials, setTutorials] = useState([]);
  useEffect(() => {
    fetch("https://talkademic-server.vercel.app/tutorials")
      .then((res) => res.json())
      .then((data) => setTutorials(data))
      .catch((err) => console.error("Failed to fetch tutorials:", err));
  }, []);

  const uniqueTutorialsByLanguage = tutorials.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.language === item.language)
  );

  return (
    <div className="max-w-7xl mx-auto my-10">
      <h2 className="text-center text-3xl font-bold my-3">
        View Tutors by Categories
      </h2>
      <p className="text-center w-[90%] md:w-[50%] mx-auto text-xs md:text-sm">
        Browse tutors easily by category to find experts in specific subjects or skills that match your learning needs and preferences.

      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
        {uniqueTutorialsByLanguage.map((tutorial) => (
          <CategoryCard key={tutorial._id} tutorial={tutorial}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
