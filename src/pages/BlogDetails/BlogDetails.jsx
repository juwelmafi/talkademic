import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import Loading from "../Loading/Loading";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://talkademic-server.vercel.app/blogs/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch blog");
        }
        return res.json();
      })
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    document.title = `Blog Details | Talkademic`;
    window.scroll(0, 0)
    return () => {
      document.title = "Talkademic";
    };
  }, []);

  if (loading) return <Loading></Loading>;
  if (error) return <p>Error: {error}</p>;
  if (!blog) return <p>No blog found</p>;

  return (
    <div className="container max-w-5xl mb-10 p-6 mx-auto">
      <Link
        to="/blogs"
        className="text-white bg-indigo-400 hover:bg-[#09A49A] px-4 py-1 rounded  mb-4 inline-block"
      >
        &larr; Back to Blogs
      </Link>

      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-2">{blog.published_date}</p>
      <img
        src={blog.image}
        alt={blog.title}
        className="md:w-[70%] h-auto rounded mb-6"
      />
      <div className="prose max-w-none">
        {/* Assuming content is plain text. If it contains HTML, use `dangerouslySetInnerHTML` carefully */}
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
