import React from "react";
import { useLoaderData } from "react-router";
import RecentBlogsCard from "./RecentBlogsCard";

const RecentBlogs = () => {
  const blogs = useLoaderData();
  //   console.log(blogs);
  return (
    <div className="my-20 max-w-7xl mx-auto">
      <h1 className="text-center text-[#d72050] text-4xl font-bold mb-6">
        Recent blogs{" "}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <RecentBlogsCard key={blog._id} blog={blog}></RecentBlogsCard>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
