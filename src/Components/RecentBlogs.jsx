import React, { use } from "react";
import { useLoaderData } from "react-router";
import RecentBlogsCard from "./RecentBlogsCard";
import { AuthContext } from "../Context/AuthContext";

const RecentBlogs = () => {
  const { theme } = use(AuthContext);
  const blogs = useLoaderData();
  //   console.log(blogs);
  return (
    <div className="my-20 max-w-7xl mx-auto">
      <div className="mb-8 w-8/12 mx-auto">
        <h2 className="text-2xl font-bold text-[#d72050] md:text-6xl text-center ">
          Recent Blogs
        </h2>
        <p
          className={`text-base  md:text-lg text-center ${
            theme === "dark" ? "text-base-200" : "text-gray-500"
          }`}
        >
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
