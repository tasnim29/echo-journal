import React, { use, useEffect, useState } from "react";

import AllBlogsCard from "../Components/AllBlogsCard";
import { FcSearch } from "react-icons/fc";
import Loader from "../Components/Loader";
import { AuthContext } from "../Context/AuthContext";

const AllBlog = () => {
  const { theme } = use(AuthContext);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");
  // console.log(search);

  useEffect(() => {
    setLoading(true);
    const encodedCategory = encodeURIComponent(selectedCategory);
    fetch(
      `https://assignment-11-server-delta-nine.vercel.app/allBlogs?searchParams=${search}&category=${encodedCategory}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  }, [search, selectedCategory]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="my-20 max-w-7xl mx-auto">
      <h1
        className={`text-2xl md:text-5xl font-bold text-center mb-3 ${
          theme === "dark" ? "text-yellow-500" : "text-[#d72050]"
        }`}
      >
        All The Blogs
      </h1>
      <div className="relative flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        {/* search bar */}
        <div
          className={`flex items-center gap-2 w-full md:w-72 rounded-lg shadow-sm px-3 py-2 border transition ${
            theme === "dark"
              ? "bg-gray-800 border-gray-600"
              : "bg-white border-[#d72050]"
          }`}
        >
          <FcSearch
            size={20}
            className={`${
              theme === "dark" ? "text-gray-300" : "text-gray-500"
            }`}
          />
          <input
            className={`w-full bg-transparent focus:outline-none text-sm transition ${
              theme === "dark"
                ? "text-white placeholder-gray-400"
                : "text-[#374151]"
            }`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            name="search"
            placeholder="Search by title"
          />
        </div>

        {/* dropdown menu */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          className={`select select-bordered w-full md:w-52 ${
            theme === "dark"
              ? "bg-gray-800 text-white border-gray-600"
              : "bg-white text-[#374151] border-[#d72050]"
          }`}
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="">All</option>
          <option value="Technology">Technology</option>
          <option value="Health & Fitness">Health & Fitness</option>
          <option value="Sports">Sports</option>
          <option value="Education">Education</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <AllBlogsCard key={blog._id} blog={blog}></AllBlogsCard>
        ))}
      </div>
    </div>
  );
};

export default AllBlog;
