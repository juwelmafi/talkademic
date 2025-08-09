import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from "recharts";

const CategoryPieChart = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    fetch("https://talkademic-server.vercel.app/tutorials")
      .then((res) => res.json())
      .then((data) => setTutorials(data))
      .catch((err) => console.error("Failed to fetch tutorials:", err));
  }, []);

  // Group tutorials by language/category
  const categoryData = tutorials.reduce((acc, curr) => {
    const existing = acc.find((item) => item.name === curr.language);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: curr.language, value: 1 });
    }
    return acc;
  }, []);

  const COLORS = ["#6366f1", "#f59e0b", "#10b981", "#ef4444", "#3b82f6", "#8b5cf6", "#14b8a6"];

  return (
    <div className="shadow-lg p-4 rounded-xl border border-gray-200">
      <h3 className="text-sm font-semibold text-gray-600 mb-2">
        Tutorials by Category
      </h3>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={categoryData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {categoryData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <p className="text-xs mt-2">📚 Distribution of tutorials by category</p>
    </div>
  );
};

export default CategoryPieChart;
