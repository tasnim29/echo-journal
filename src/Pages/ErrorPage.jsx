import React from "react";
import { Link } from "react-router";
import myAnimation from "../assets/errorAnimation.json";
import Lottie from "lottie-react";

const ErrorPage = () => {
  return (
    <div>
      <div>
        <div>
          <div className="text-center space-y-5 my-20 bg-white rounded-xl">
            <div className="flex justify-center ">
              <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]">
                <Lottie animationData={myAnimation} loop={true} />
              </div>
            </div>

            <p className="text-gray-500 text-xl">
              Oops!!The page you are trying to navigate does not exist
            </p>
            <Link to="/">
              <button className="py-3 px-8 cursor-pointer hover:scale-105 bg-green-600 text-white ">
                Go to home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
