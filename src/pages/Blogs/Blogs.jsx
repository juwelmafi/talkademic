import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Loading from "../Loading/Loading";

const Blogs = () => {
  const [blogs, setBlogs] = useState('');

  useEffect(() => {
    fetch("https://talkademic-server.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  if(!blogs){
    return <Loading></Loading>
  }


  return (
    <div>
      <section>
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          {/* Featured Blog */}
          {blogs.length > 0 && (
            <Link
              to={`/blogs/${blogs[0]._id}`}
              className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12"
            >
              <img
                src={blogs[0].image}
                alt={blogs[0].title}
                className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7"
              />
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                  {blogs[0].title}
                </h3>
                <span className="text-xs">{blogs[0].published_date}</span>
                <p className="line-clamp-3">{blogs[0].content}</p>
              </div>
            </Link>
          )}

          {/* Other Blogs */}
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.slice(1).map((blog, index) => (
              <Link
                key={index}
                to={`/blogs/${blog._id}`}
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44"
                  src={blog.image}
                  alt={blog.title}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    {blog.title}
                  </h3>
                  <span className="text-xs">{blog.published_date}</span>
                  <p className="line-clamp-3">{blog.content}</p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Blogs;
