import React from "react";
import { useLoaderData } from "react-router";
import RecentBlogsCard from "./RecentBlogsCard";

const RecentBlogs = () => {
  const blogs = useLoaderData();
  //   console.log(blogs);
  return (
    <div className="my-20 max-w-7xl mx-auto">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold text-[#d72050] sm:text-4xl md:mx-auto ">
          <span className="relative inline-block">
            <span className="relative">The</span>
          </span>{" "}
          Recent Blogs
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          There are six recent blogs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <RecentBlogsCard
            key={blog._id}
            blog={blog}
            index={index}
          ></RecentBlogsCard>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
