import React, { useEffect, useState } from "react";

import AllBlogsCard from "../Components/AllBlogsCard";
import { FcSearch } from "react-icons/fc";

const AllBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");
  console.log(search);

  useEffect(() => {
    fetch(
      `http://localhost:3000/allBlogs?searchParams=${search}&category=${selectedCategory}`
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [search, selectedCategory]);

  return (
    <div className="my-20 max-w-7xl mx-auto">
      <h1 className="text-center text-[#d72050] text-3xl font-bold mb-6">
        All The Blogs
      </h1>
      <div className="relative flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        {/* search bar */}
        <div className="flex items-center gap-2 w-full md:w-72 bg-white rounded-lg shadow-sm px-3 py-2 border border-green-300">
          <FcSearch size={20} className="text-gray-500" />
          <input
            className="w-full bg-transparent focus:outline-none text-sm "
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            name="search"
            placeholder="Search by title"
          />
        </div>
        {/* dropdown menu */}
        <select
          defaultValue={""}
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          className="select select-bordered  w-full md:w-52 "
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
