import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaEye, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../../Loading/Loading";

const PendingTutors = () => {
  const {
    data: tutors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["pending-tutors"],
    queryFn: async () => {
      const res = await axios.get("https://talkademic-server.vercel.app/tutor-applications?status=pending");
      return res.data;
    },
  });

  const handleAccept = async (id, email) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to approve this tutor?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approve it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await axios.patch(`https://talkademic-server.vercel.app/tutor-applications/${id}/status`, {
          status: "approved",
          email,
        });
        if (res.data.modifiedCount > 0) {
          Swal.fire("Accepted!", "Tutor has been approved.", "success");
          refetch();
        }
      } catch (err) {
        Swal.fire("Error!", "Could not approve tutor.", err.message);
      }
    }
  };

  const handleReject = async (id, email) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to reject this tutor?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, reject it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await axios.patch(`https://talkademic-server.vercel.app/tutor-applications/${id}/status`, {
          status: "rejected",
          email,
        });
        if (res.data.modifiedCount > 0) {
          Swal.fire("Rejected!", "Tutor has been rejected.", "info");
          refetch();
        }
      } catch (err) {
        Swal.fire("Error!", "Could not reject tutor.", err.message);
      }
    }
  };

  const handleDetails = (tutor) => {
    Swal.fire({
      title: tutor.name,
      html: `
        <p><strong>Email:</strong> ${tutor.email}</p>
        <p><strong>Subject:</strong> ${tutor.subject}</p>
        <p><strong>Qualification:</strong> ${tutor.qualification}</p>
        <p><strong>Experience:</strong> ${tutor.experience}</p>
        <p><strong>Contact:</strong> ${tutor.contact}</p>
        <p><strong>Applied At:</strong> ${new Date(tutor.created_at).toLocaleString()}</p>
      `,
      icon: "info",
    });
  };

    useEffect(() => {
      document.title = `Pending Tutors | Talkademic`;
      return () => {
        document.title = "Talkademic";
      };
    }, []);
  

  if (isLoading) return <Loading />;

  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-xl font-bold mb-4">Pending Tutors</h2>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Qualification</th>
            <th>Applied At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tutors.map((tutor, index) => (
            <tr key={tutor._id}>
              <td>{index + 1}</td>
              <td>{tutor.name}</td>
              <td>{tutor.email}</td>
              <td>{tutor.subject}</td>
              <td>{tutor.qualification}</td>
              <td>{new Date(tutor.created_at).toLocaleDateString()}</td>
              <td className="flex gap-1">
                <button
                  onClick={() => handleDetails(tutor)}
                  className="btn btn-sm btn-info text-white"
                  title="View Details"
                >
                  <FaEye size={18}/>
                </button>
                <button
                  onClick={() => handleAccept(tutor._id, tutor.email)}
                  className="btn btn-sm btn-success text-white"
                  title="Accept"
                >
                  <FaCheckCircle size={18}/>
                </button>
                <button
                  onClick={() => handleReject(tutor._id, tutor.email)}
                  className="btn btn-sm btn-warning text-white"
                  title="Reject"
                >
                  <FaTimesCircle size={18}/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingTutors;
