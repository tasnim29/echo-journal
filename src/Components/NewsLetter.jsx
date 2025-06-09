import Lottie from "lottie-react";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import myAnimation from "../assets/newsletterAnimation.json";

const NewsLetter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for subscribing to our newsletter");
    e.target.reset();
  };

  return (
    <div className="max-w-7xl mx-auto mb-12">
      <h1 className="text-center text-[#d72050] text-4xl font-bold mb-6">
        Newsletter
      </h1>
      <div className="md:flex items-center  gap-6 justify-center">
        <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]">
          <Lottie animationData={myAnimation} loop={true} />
        </div>
        <div className="md:max-w-md lg:col-span-2">
          <p className="text-primary text-center md:text-left font-medium">
            Subscribe for updates
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col mt-4 md:flex-row"
          >
            <input
              placeholder="Email"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-primary focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 btn bg-primary text-white"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-500">
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
