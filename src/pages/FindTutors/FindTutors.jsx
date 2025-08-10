import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import TutorCard from "./TutorCard";
import axios from "axios";

const FindTutors = () => {
  const tutorials = useLoaderData();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); // "" | "asc" | "desc"

  // console.log(query);
  // console.log(results);

  useEffect(() => {
    if (query.trim() === "") {
      setResults(tutorials);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://talkademic-server.vercel.app/tutorials/search/tutors?que=${query}`
        );
        setResults(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();

    // const delay = setTimeout(() => {
    //   fetchData();
    // }, 300);

    // return () => clearTimeout(delay);
  }, [query]);
  // Sort results based on sortOrder state
  const sortedResults = [...results];

  if (sortOrder === "asc") {
    sortedResults.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    sortedResults.sort((a, b) => b.price - a.price);
  }

  useEffect(() => {
    document.title = `Find Tutors | Talkademic`;
    return () => {
      document.title = "Talkademic";
    };
  }, []);

  return (
    <div className="my-20 max-w-7xl mx-auto">
      <h2 className="text-center text-2xl md:text-3xl font-bold my-3">
        Find All Tutors Here
      </h2>
      <p className="text-center w-[90%] md:w-[60%] lg:w-[50%] mx-auto text-xs md:text-sm mb-10">
        Discover a wide range of tutorials to boost your skills and knowledge.
        Learn at your own pace, from expert tutors, anytime and anywhere. Start
        exploring your learning journey today.
      </p>
      <div className="flex items-center justify-center w-[90%] md:w-full mx-auto">
        <label className="input rounded-4xl">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="text"
            required
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <div className="flex justify-center items-center my-4 ">
        <div className="bg-indigo-400 inline-block mx-auto shadow-md">
          <label className="mr-2 font-semibold text-white px-2">Sort by price:</label>
          <select
            className="bg-white   px-2 py-1"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">None</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-1 lg:gap-5 mt-10">
        {sortedResults.map((tutor) => (
          <TutorCard key={tutor._id} tutor={tutor}></TutorCard>
        ))}
      </div>
    </div>
  );
};

export default FindTutors;
