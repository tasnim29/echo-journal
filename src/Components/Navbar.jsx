import React, { use } from "react";
import { Link, NavLink } from "react-router";

import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignout = () => {
    signOutUser()
      .then(() => {
        console.log("User signed out successfully.");
      })
      .catch((err) => {
        console.error("Sign-out error:", err);
      });
  };
  const links = (
    <>
      <li className=" font-semibold text-sm ">
        <NavLink to="/">Home</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gray-600">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-100 rounded-box w-52 text-green-900"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          {/* <img className="w-10 h-10" src={logo} alt="Logo" /> */}
          <span className="text-white font-bold text-xl tracking-wide">
            Green Circle
          </span>
        </div>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-2">
        {user ? (
          <div className="flex gap-5 items-center ">
            <div
              className="avatar tooltip tooltip-left cursor-pointer relative"
              data-tip={user.displayName}
            >
              <div className="ring-primary ring-offset-base-100 w-9 rounded-full ring-2 ring-offset-2">
                <img src={user.photoURL} />
              </div>
            </div>
            <button className="btn btn-primary" onClick={handleSignout}>
              Sign Out
            </button>
          </div>
        ) : (
          <div className="space-x-3">
            <Link to="/signin" className="btn btn-sm ">
              Sign In
            </Link>
            <Link to="/signup" className="btn btn-sm  ">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
