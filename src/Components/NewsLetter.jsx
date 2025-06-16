import Lottie from "lottie-react";
import React, { use } from "react";
import { toast, ToastContainer } from "react-toastify";
import myAnimation from "../assets/newsletterAnimation.json";
import { AuthContext } from "../Context/AuthContext";

const NewsLetter = () => {
  const { theme } = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for subscribing to our newsletter");
    e.target.reset();
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-[#d72050] text-2xl md:text-6xl font-bold mb-6">
        Newsletter
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
        <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] mx-auto md:mx-0">
          <Lottie animationData={myAnimation} loop={true} />
        </div>

        <div className="md:max-w-md lg:col-span-2">
          <p
            className={`text-center md:text-left font-medium ${
              theme === "dark" ? "text-yellow-500" : "text-primary"
            }`}
          >
            Subscribe for updates
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col mt-4 md:flex-row md:items-center gap-3 md:gap-2"
          >
            <input
              placeholder="Email"
              required
              type="email"
              className={`flex-grow w-full h-12 px-4 transition duration-200 bg-white border border-gray-300 text-gray-900 rounded shadow-sm appearance-none focus:border-primary focus:outline-none focus:shadow-outline ${
                theme === "dark" ? "border-3 border-orange-500 " : ""
              }`}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 btn bg-primary text-white"
            >
              Subscribe
            </button>
          </form>
          <p
            className={` text-sm mt-5 ${
              theme === "dark" ? "text-base-200" : "text-gray-500"
            }`}
          >
            We promise to only send useful content—no spam, just stories worth
            reading.
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default NewsLetter;
