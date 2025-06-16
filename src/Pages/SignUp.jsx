import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import myAnimation from "../assets/registerAnimation.json";
import Lottie from "lottie-react";

const SignUp = () => {
  const navigation = useNavigate();
  const { createUser, googleLogin, setUser, updateUserProfile, theme } =
    use(AuthContext);
  // passwordShow toggle state
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);

    const hasNumber = /(?=.*\d)/.test(password);

    const hasUppercase = /(?=.*[A-Z])/.test(password);
    const hasMinLength = /.{6,}/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_\-+={}[\]:;"'|<>,.?/~`]/.test(password);

    if (!hasNumber || !hasUppercase || !hasMinLength || !hasSpecialChar) {
      return toast.error(
        "Password must be at least 8 characters, include one lowercase and one uppercase letter, and a special character "
      );
    }

    // register with email
    createUser(email, password)
      .then((userCredential) => {
        const userInformation = userCredential.user;

        // updateUserProfile
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...userInformation, displayName: name, photoURL: photo });
            console.log(userInformation);

            toast.success("Successfully Registered");
            setTimeout(() => navigation("/"), 1500);
          })
          .catch(() => {
            setUser(userInformation);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.warn("Already have an account with this email");
      });
  };

  //   register with google
  const handleGoogle = () => {
    googleLogin()
      .then((userCredential) => {
        const userInformation = userCredential.user;
        console.log(userInformation);
        setUser(userInformation);
        toast.success("Successfully Signed in");
        setTimeout(() => navigation("/"), 1500);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error("Invalid password");
      });
  };
  return (
    <div
      className={`w-full max-w-5xl mx-auto px-4 py-6 sm:px-6 sm:py-10 shadow-2xl rounded-md my-10 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-500 ${
        theme === "dark" ? "border-4 border-yellow-500" : ""
      }`}
    >
      <div className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#d72050] mb-2">
          Register
        </h1>
        <p className="text-sm sm:text-base text-[#374151]">
          Create your account
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Form Section */}
        <form onSubmit={handleRegister} className="space-y-10">
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block mb-1 text-sm text-[#374151]"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
                className={`w-full px-3 py-2 border border-[#f3f4f6] rounded-md bg-[#f9fafb] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#d72050] text-sm sm:text-base ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-100 border-gray-600 focus:ring-yellow-500"
                    : "bg-white text-gray-900 border-gray-300 focus:ring-[#d72050]"
                }`}
              />
            </div>

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
                placeholder="leroy@jenkins.com"
                className={`w-full px-3 py-2 border border-[#f3f4f6] rounded-md bg-[#f9fafb] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#d72050] text-sm sm:text-base ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-100 border-gray-600 focus:ring-yellow-500"
                    : "bg-white text-gray-900 border-gray-300 focus:ring-[#d72050]"
                }`}
              />
            </div>

            {/* Photo */}
            <div>
              <label
                htmlFor="photo"
                className="block mb-1 text-sm text-[#374151]"
              >
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="Enter the URL of your image"
                className={`w-full px-3 py-2 border border-[#f3f4f6] rounded-md bg-[#f9fafb] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#d72050] text-sm sm:text-base ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-100 border-gray-600 focus:ring-yellow-500"
                    : "bg-white text-gray-900 border-gray-300 focus:ring-[#d72050]"
                }`}
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
                className={`w-full px-3 py-2 border border-[#f3f4f6] rounded-md bg-[#f9fafb] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#d72050] text-sm sm:text-base ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-100 border-gray-600 focus:ring-yellow-500"
                    : "bg-white text-gray-900 border-gray-300 focus:ring-[#d72050]"
                }`}
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
            className="flex items-center justify-center gap-2 btn btn-outline btn-secondary w-full"
          >
            <FcGoogle size={20} /> Register with Google
          </button>

          {/* Submit + Redirect */}
          <div className="space-y-2">
            <button
              type="submit"
              className="btn btn-outline btn-primary w-full"
            >
              Register
            </button>
            <p className="px-6 text-sm text-center text-[#374151]">
              Already have an account?
              <Link
                to="/signin"
                className="hover:underline text-[#d72050] font-medium ml-1"
              >
                Log In
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

export default SignUp;
