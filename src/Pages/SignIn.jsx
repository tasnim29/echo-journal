import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";

import { toast, ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";
import myAnimation from "../assets/loginAnimation.json";
import Lottie from "lottie-react";

const Login = () => {
  const navigation = useNavigate();
  const { userLogin, googleLogin, setUser } = use(AuthContext);
  // passwordShow toggle
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  // console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;

    const password = form.password.value;
    console.log(email, password);

    // login
    userLogin(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setUser(user);
        toast.success("Successfully Signed in");
        setTimeout(
          () => navigation(`${location.state ? location.state : "/"}`),
          1500
        );
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error("Invalid password");
      });
  };
  const handleGoogle = () => {
    googleLogin()
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setUser(user);
        toast.success("Successfully Signed in");
        setTimeout(
          () => navigation(`${location.state ? location.state : "/"}`),
          1500
        );
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error("Invalid password");
      });
  };
  return (
    <div className="w-full  max-w-5xl mx-auto px-4 py-6 sm:px-6 sm:py-10 shadow-2xl rounded-md my-10 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-500  ">
      <div className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#d72050] mb-2">
          Log In
        </h1>
        <p className="text-sm sm:text-base text-[#374151]">
          Log in to access your account
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Form Section */}
        <form onSubmit={handleLogin} className="space-y-10">
          <div className="space-y-4">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm text-[#374151]"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="w-full px-3 py-2 border border-[#f3f4f6] rounded-md bg-[#f9fafb] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#d72050] text-sm sm:text-base"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label
                htmlFor="password"
                className="block mb-1 text-sm text-[#374151]"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border border-[#f3f4f6] rounded-md bg-[#f9fafb] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#d72050] text-sm sm:text-base"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-9 cursor-pointer text-[#374151]"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </span>
            </div>
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogle}
            type="button"
            className="flex items-center justify-center gap-2 btn btn-outline btn-secondary w-full "
          >
            <FcGoogle size={20} /> Login with Google
          </button>

          {/* Submit + Redirect */}
          <div className="space-y-5">
            <button
              type="submit"
              className="btn btn-outline btn-primary w-full"
            >
              Log In
            </button>
            <p className="px-6 text-sm text-center text-[#374151]">
              Don't have an account yet?
              <Link
                to="/signup"
                className="hover:underline text-[#d72050] font-medium ml-1"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>

        {/* Lottie Section */}
        <div className="flex justify-center md:justify-end">
          <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]">
            <Lottie animationData={myAnimation} loop={true} />
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
