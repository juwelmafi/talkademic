import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const AddTutorials = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(user);

  const handleAddTutorial = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTutorial = Object.fromEntries(formData.entries());
    const accessToken = user?.accessToken;
    newTutorial.accessToken = accessToken;

    axios
      .post("https://talkademic-server.vercel.app/tutorials", newTutorial)
      .then(() => {
        // console.log("tutotial added successfully", res.data)
        toast.success("Tutorial added successfully");
        navigate("/my-tutorials");
      });
  };

  useEffect(() => {
      document.title = `Add Tutorials | Talkademic`;
      return () => {
        document.title = "Talkademic";
      };
    }, []);

  return (
    <div className="my-8 px-1 max-w-7xl mx-auto text-xs md:text-sm">
      <div className="p-6 w-full md:w-[60%] mx-auto border border-gray-100 rounded-lg shadow-md mt-10">
        <form className="space-y-4" onSubmit={handleAddTutorial}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            <div>
              <label className="block mb-1 font-medium">Your Name</label>
              <input
                type="text"
                readOnly
                className="w-full  border border-gray-300 rounded-lg px-4 py-2 cursor-not-allowed"
                name="userName"
                value={user?.displayName}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Your Email</label>
              <input
                type="email"
                readOnly
                className="w-full  border border-gray-300 rounded-lg px-4 py-2 cursor-not-allowed"
                name="userEmail"
                value={user?.email}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Your Photo</label>
              <input
                type="text"
                readOnly
                className="w-full  border border-gray-300 rounded-lg px-4 py-2 cursor-not-allowed"
                name="userPhoto"
                value={user?.photoURL}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium ">Language</label>
              <select
                className="w-full border border-gray-300 rounded-lg text-gray-400 px-4 py-2 "
                name="language"
                required
              >
                <option value="Select a category">Select a language</option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="Germen">German</option>
                <option value="Japaneese">Japaneese</option>
                <option value="Arabic">Arabic</option>
                <option value="French">French</option>
                <option value="Chineese">Mandarin Chineese</option>
                <option value="Portuguese">Portuguese</option>
                <option value="Italian">Italian</option>
                <option value="Hindi">Hindi</option>
                <option value="Bangla">Bangla</option>
                <option value="Korean">Korean</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">Language Image</label>
              <input
                type="url"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 "
                name="langPhoto"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium ">Price ($)</label>
              <input
                type="text"
                placeholder="Enter budget"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 "
                name="price"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium ">Description</label>
              <textarea
                placeholder="Describe the task"
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 "
                name="description"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Review</label>
              <input
                type="text"
                value={0}
                readOnly
                className="w-full border border-gray-300 rounded-lg px-4 py-2 cursor-not-allowed"
                name="review"
              />
            </div>
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="text-white w-full bg-indigo-400  font-semibold py-2 px-4 rounded-lg hover:bg-[#222e39] transition"
            >
              Add Tutorial
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTutorials;
