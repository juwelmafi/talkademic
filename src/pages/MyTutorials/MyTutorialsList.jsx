import axios from "axios";
import React, { use, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { truncateWords } from "./WordLimit";
const MyTutorialsList = ({myTutorialsPromise}) => {
  console.log(myTutorialsPromise)
  const { user } = useContext(AuthContext);
  console.log(user)
  const [singleTutor, setSingleTutor] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("");
  const initialTutorials = use(myTutorialsPromise);
  const [tutorials, setTutorials] = useState([]);
  useEffect(() => {
    setTutorials(initialTutorials);
  }, [initialTutorials]);
  console.log(user)
  

  console.log(tutorials)

  const [formInputs, setFormInputs] = useState({
    language: "",
    langPhoto: "",
    description: "",
    price: "",
  });

  const handleFetchSingleTutor = async (id) => {
    const res = await fetch(`https://talkademic-server.vercel.app/tutorials/${id}`);
    const tutorial = await res.json();
    setSingleTutor(tutorial);
    setFormInputs({
      language: tutorial.language || "",
      description: tutorial.description || "",
      langPhoto: tutorial.langPhoto || "",
      price: tutorial.price || "",
    });
    setSelectedCategory(tutorial.language);
  };

  // console.log(singleTutor);

  // Handle Delete //
  const handleDelete = (id) => {
    axios.delete(`https://talkademic-server.vercel.app/my-tutorials/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        setTutorials((prev) => prev.filter((t) => t._id !== id));
      }
    });
  };

  const handleUpdateBtn = (id) => {
    document.getElementById("my_modal_5").showModal();
    handleFetchSingleTutor(id);
  };

  const handleUpdateTutorial = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedTask = Object.fromEntries(formData.entries());
    console.log(updatedTask);

    // update task to db //

    axios
      .put(`https://talkademic-server.vercel.app/tutorials/${singleTutor._id}`, updatedTask)
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (data.modifiedCount) {
          // toast.success("Task added successfully");
          document.getElementById("my_modal_5").close();
          const updatedTasks = tutorials.map((task) =>
            task._id === singleTutor._id ? { ...task, ...updatedTask } : task
          );
          setTutorials(updatedTasks);
        }
      });
  };

  return (
    <div className="mt-20">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Language</th>
              <th>Price</th>
              <th>Description</th>
              <th>Review</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tutorials.map((tutorial) => (
              <tr key={tutorial._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={tutorial?.langPhoto}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{tutorial?.language}</div>
                    </div>
                  </div>
                </td>
                <td>${tutorial?.price}</td>
                <td>{truncateWords(tutorial?.description, 5)}</td>
                <td>{tutorial?.review}</td>
                <th className="space-x-1">
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => handleDelete(tutorial._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => handleUpdateBtn(tutorial._id)}
                  >
                    Update
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* modal is here  */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form className="space-y-4" onSubmit={handleUpdateTutorial}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
              <div>
                <label className="block mb-1 font-medium">Your Name</label>
                <input
                  type="text"
                  readOnly
                  className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 cursor-not-allowed"
                  name="userName"
                  value={user?.displayName || ""}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Your Email</label>
                <input
                  type="email"
                  readOnly
                  className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 cursor-not-allowed"
                  name="userEmail"
                  value={user?.email || ""}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Your Photo</label>
                <input
                  type="text"
                  readOnly
                  className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 cursor-not-allowed"
                  name="userPhoto"
                  value={user?.photoURL || ""}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium ">Language</label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
                  name="language"
                  required
                  value={selectedCategory || ""}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="Select a category">Select a language</option>
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Germen">Germen</option>
                  <option value="Japaneese">Japaneese</option>
                  <option value="Arabic">Arabic</option>
                  <option value="French">French</option>
                  <option value="Chineese">Chineese</option>
                  <option value="Portuguese">Portuguese</option>
                  <option value="Italian">Italian</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 font-medium">Language Image</label>
                <input
                  type="url"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 "
                  name="langPhoto"
                  required
                  value={formInputs.langPhoto || ""}
                  onChange={(e) =>
                    setFormInputs({
                      ...formInputs,
                      langPhoto: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block mb-1 font-medium ">Price ($)</label>
                <input
                  type="text"
                  placeholder="Enter budget"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
                  name="price"
                  required
                  value={formInputs.price || ""}
                  onChange={(e) =>
                    setFormInputs({
                      ...formInputs,
                      price: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block mb-1 font-medium ">Description</label>
                <textarea
                  placeholder="Describe the task"
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
                  name="description"
                  required
                  value={formInputs.description || ""}
                  onChange={(e) =>
                    setFormInputs({
                      ...formInputs,
                      description: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Review</label>
                <input
                  type="text"
                  value={0}
                  readOnly
                  className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 cursor-not-allowed"
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
          <div className="modal-action w-full">
            <form method="dialog" className="w-full">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn w-full">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyTutorialsList;
