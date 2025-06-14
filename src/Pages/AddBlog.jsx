import Lottie from "lottie-react";
import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import UseAxiosSecure from "../AxiosHooks/UseAxiosSecure";

const AddBlog = () => {
  const { user } = use(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newBlog = Object.fromEntries(formData.entries());
    // console.log(newBlog);

    // axios
    axiosSecure
      .post("/blogs", newBlog)
      .then((result) => {
        console.log(result.data);
        Swal.fire({
          title: "Your Blog Has Been Added",
          icon: "success",
          draggable: true,
        });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-8 sm:px-10 sm:py-12 shadow-2xl rounded-lg my-12 bg-white border border-[#f3f4f6]">
      <div className="mb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#d72050]  mb-3">
          Add Your Blog
        </h1>
        <p className="text-base sm:text-lg text-[#374151]">
          Fill in the form below to publish your blog!
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="container flex flex-col mx-auto space-y-14"
      >
        <fieldset className="grid grid-cols-6 gap-7 p-8 rounded-xl  shadow-lg bg-gradient-to-br from-gray-100 via-gray-200 to-gray-500">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="title"
              className="text-base font-semibold text-[#d72050]"
            >
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Please enter your blog title"
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg bg-white placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#d72050] text-base sm:text-lg transition"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="imageURL"
              className="text-base font-semibold text-[#d72050]"
            >
              Image of your blog
            </label>
            <input
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Enter image URL"
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg bg-white placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#d72050] text-base sm:text-lg transition"
            />
          </div>

          <div className="col-span-6 flex flex-col sm:flex-row gap-8">
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="address"
                className="text-base font-semibold text-[#d72050]"
              >
                Author's Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Enter address"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg bg-white placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#d72050] text-base sm:text-lg transition"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="photoURL"
                className="text-base font-semibold text-[#d72050]"
              >
                Photo of user
              </label>
              <input
                id="photoURL"
                name="photoURL"
                type="text"
                defaultValue={user.photoURL}
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg bg-white placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#d72050] text-base sm:text-lg transition"
              />
            </div>
          </div>

          <div className="col-span-6 sm:col-span-2">
            <label
              htmlFor="category"
              className="text-base font-semibold text-[#d72050]"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              defaultValue="Pick a category"
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg bg-white text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#d72050] text-base sm:text-lg transition"
            >
              <option disabled>Pick a category</option>
              <option>Technology</option>
              <option>Health & Fitness</option>
              <option>Sports</option>
              <option>Education</option>
            </select>
          </div>

          <div className="col-span-6 sm:col-span-2">
            <label
              htmlFor="name"
              className="text-base font-semibold text-[#d72050]"
            >
              Author Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg bg-white placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#d72050] text-base sm:text-lg transition"
            />
          </div>

          <div className="col-span-6">
            <label
              htmlFor="short"
              className="text-base font-semibold text-[#d72050]"
            >
              Short Description
            </label>
            <textarea
              id="short"
              name="short"
              placeholder="Shortly write about your blog"
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg bg-white text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#d72050] text-base sm:text-lg transition"
            ></textarea>
          </div>

          <div className="col-span-6">
            <label
              htmlFor="long"
              className="text-base font-semibold text-[#d72050]"
            >
              Long Description
            </label>
            <textarea
              id="long"
              name="long"
              rows="6"
              placeholder="Write your blog briefly"
              className="w-full mt-2 px-4 py-4 border border-gray-300 rounded-lg bg-white text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#d72050] text-base sm:text-lg transition"
            ></textarea>
          </div>

          <div className="col-span-6">
            <button
              className="bg-gradient-to-r from-[#d72050] via-[#a3163a] to-[#f03c6b] btn w-full text-white font-extrabold py-3 rounded-lg hover:from-[#bb1c45] hover:via-[#911731] hover:to-[#d9335d] transition duration-300 shadow-lg"
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

export default AddBlog;
