import React from "react";
import { useLoaderData } from "react-router";

const UpdateBlog = () => {
  const blog = useLoaderData();
  //   console.log(blog);
  const { _id, title, imageURL, name, short, long, address, category, email } =
    blog;
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6 sm:px-6 sm:py-10 shadow-2xl rounded-md my-10 bg-[#ffffff] border border-[#f3f4f6]">
      <div className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#d72050] mb-2">
          Update Your Blog
        </h1>
        <p className="text-sm sm:text-base text-[#374151]">
          You can update your blog here!
        </p>
      </div>

      <form className="container flex flex-col mx-auto space-y-12">
        <fieldset className="grid grid-cols-6 gap-6 p-6 rounded-md bg-[#f9fafb]">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="title" className="text-sm text-[#374151]">
              Title
            </label>
            <input
              id="title"
              name="title"
              defaultValue={title}
              type="text"
              placeholder="Please enter your blog title"
              className="w-full px-3 py-2 border border-[#f3f4f6] rounded-md bg-white placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#d72050] text-sm sm:text-base"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="imageURL" className="text-sm text-[#374151]">
              Image of your blog
            </label>
            <input
              id="imageURL"
              name="imageURL"
              defaultValue={imageURL}
              type="text"
              placeholder="Enter image URL"
              className="w-full px-3 py-2 border border-[#f3f4f6] rounded-md bg-white placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#d72050] text-sm sm:text-base"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="address" className="text-sm text-[#374151]">
              Author's Address
            </label>
            <input
              id="address"
              name="address"
              defaultValue={address}
              type="text"
              placeholder="Enter address"
              className="w-full px-3 py-2 border border-[#f3f4f6] rounded-md bg-white placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#d72050] text-sm sm:text-base"
            />
          </div>

          <div className="col-span-6 sm:col-span-2">
            <label htmlFor="category" className="text-sm text-[#374151]">
              Category
            </label>
            <select
              id="category"
              name="category"
              defaultValue={category}
              className="w-full px-3 py-2 border border-[#f3f4f6] rounded-md bg-white text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#d72050] text-sm sm:text-base"
            >
              <option disabled>Pick a category</option>
              <option>Technology</option>
              <option>Health & Fitness</option>
              <option>Sports</option>
              <option>Education</option>
            </select>
          </div>

          <div className="col-span-6 sm:col-span-2">
            <label htmlFor="name" className="text-sm text-[#374151]">
              Author Name
            </label>
            <input
              id="name"
              name="name"
              defaultValue={name}
              type="text"
              placeholder="Your name"
              className="w-full px-3 py-2 border border-[#f3f4f6] rounded-md bg-white placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#d72050] text-sm sm:text-base"
            />
          </div>

          <div className="col-span-6 sm:col-span-2">
            <label htmlFor="email" className="text-sm text-[#374151]">
              Author Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={email}
              className="w-full px-3 py-2 border border-[#f3f4f6] rounded-md bg-white placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#d72050] text-sm sm:text-base"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="short" className="text-sm text-[#374151]">
              Short Description
            </label>
            <textarea
              id="short"
              name="short"
              defaultValue={short}
              placeholder="Shortly write about your blog"
              className="w-full px-3 py-2 border border-[#f3f4f6] rounded-md bg-white text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#d72050] text-sm sm:text-base"
            ></textarea>
          </div>

          <div className="col-span-6">
            <label htmlFor="long" className="text-sm text-[#374151]">
              Long Description
            </label>
            <textarea
              id="long"
              name="long"
              defaultValue={long}
              rows="6"
              placeholder="Write your blog briefly"
              className="w-full px-3 py-2 border border-[#f3f4f6] rounded-md bg-white text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#d72050] text-sm sm:text-base"
            ></textarea>
          </div>

          <div className="col-span-6">
            <button
              className="bg-[#d72050] btn w-full text-white font-semibold py-2 rounded-md hover:bg-[#bb1c45] transition duration-200"
              type="submit"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default UpdateBlog;
