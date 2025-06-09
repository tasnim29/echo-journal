import React from "react";

import blog1 from "../assets/blog1.jpg";

const TipsSection = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="text-center text-[#d72050] text-4xl font-bold mb-10">
        Tips for Writing Engaging Blog Posts
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-100 hover:scale-105 cursor-pointer shadow-2xl">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded bg-secondary">
                1
              </span>
              <p className="text-lg font-semibold sm:text-base">
                🖋️ Write Catchy Headlines
              </p>
            </div>
            <p className="text-sm text-gray-900">
              A great blog starts with a title that grabs attention. Make it
              emotionally engaging so users feel compelled to click.
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-teal-100 hover:scale-105 cursor-pointer shadow-2xl">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded bg-primary">
                2
              </span>
              <p className="text-lg font-semibold sm:text-base">
                🧩 Use Subheadings to Organize
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Break your content into sections with headings. This not only
              helps readers, but also boosts SEO performance.
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-pink-200 hover:scale-105 cursor-pointer shadow-2xl">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded  bg-teal-800 ">
                3
              </span>
              <p className="text-lg font-semibold sm:text-base">
                📸 Add Visuals
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Images, infographics, or videos keep your readers interested.
              Visuals also make your blog more shareable and memorable.” .
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-purple-200 hover:scale-105 cursor-pointer shadow-2xl">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-teal-900 rounded  bg-gray-300">
                4
              </span>
              <p className="text-lg font-semibold sm:text-base">
                🧠 Know Your Audience
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Write with your target readers in mind. Understanding their needs
              will make your content more relatable.
            </p>
          </div>
        </div>
        {/* image */}
        <div className="relative md:col-span-2 lg:col-span-2">
          <img
            className="inset-0 object-cover object-bottom w-full h-56 rounded shadow-lg lg:absolute lg:h-full"
            src={blog1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TipsSection;
