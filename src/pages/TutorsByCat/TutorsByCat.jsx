import React from "react";
import { useLoaderData } from "react-router";
import TutorCard from "../FindTutors/TutorCard";
import { useEffect } from "react";

const TutorsByCat = () => {
  const tutors = useLoaderData();
  // console.log(tutors)

  useEffect(() => {
    document.title = `Tutors by categoy | Talkademic`;
    window.scroll(0, 0);
    return () => {
      document.title = "Talkademic";
    };
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {tutors.map((tutor) => (
          <TutorCard key={tutor._id} tutor={tutor}></TutorCard>
        ))}
      </div>
    </div>
  );
};

export default TutorsByCat;
