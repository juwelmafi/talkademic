import React, { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const BeATutor = () => {
  const { user } = useContext(AuthContext);
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tutorData = {
      name: user?.displayName || "",
      email: user?.email || "",
      education,
      experience,
      bio,
      status: "pending",
      created_at: new Date().toISOString(),
    };

    try {
      const res = await axios.post(
        "https://talkademic-server.vercel.app/tutor-applications",
        tutorData
      );
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Application Submitted!",
          text: "Your request to be a tutor has been received and is pending approval.",
        });
        setEducation("");
        setExperience("");
        setBio("");
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div className="my-10 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-10">
        <h2 className="text-3xl font-bold text-[#043f2e] mb-2">Apply to be a Tutor</h2>
        <p className="text-gray-600 mb-8">
          Share your knowledge and help students learn! Fill out the form below to apply as a tutor. 
          Your application will be reviewed by our team.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="input input-bordered w-full bg-[#f5f5f5]"
          />
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="input input-bordered w-full bg-[#f5f5f5]"
          />
          <input
            type="text"
            placeholder="Education (e.g. BA, BBA, BSC, MA)"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            required
            className="input input-bordered w-full"
          />
          <input
            type="number"
            placeholder="Years of Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
            className="input input-bordered w-full"
          />
          <textarea
            placeholder="Short Bio (Tell us about yourself)"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="textarea textarea-bordered w-full"
            rows="4"
          ></textarea>

          <button
            type="submit"
            className="btn bg-[#09A49A] text-white hover:bg-[#07857e] font-semibold px-6"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default BeATutor;
