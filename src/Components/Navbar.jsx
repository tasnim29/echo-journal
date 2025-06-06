import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/navLogo.jpg";

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
      <li className="font-semibold text-sm">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#d72050]" : "text-[#374151] hover:text-[#d72050]"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="font-semibold text-sm">
        <NavLink
          to="/addBlog"
          className={({ isActive }) =>
            isActive ? "text-[#d72050]" : "text-[#374151] hover:text-[#d72050]"
          }
        >
          Add Blog
        </NavLink>
      </li>
      <li className="font-semibold text-sm">
        <NavLink
          to="/allBlog"
          className={({ isActive }) =>
            isActive ? "text-[#d72050]" : "text-[#374151] hover:text-[#d72050]"
          }
        >
          All blogs
        </NavLink>
      </li>
      <li className="font-semibold text-sm">
        <NavLink
          to="/featuredBlog"
          className={({ isActive }) =>
            isActive ? "text-[#d72050]" : "text-[#374151] hover:text-[#d72050]"
          }
        >
          Featured Blogs
        </NavLink>
      </li>
      <li className="font-semibold text-sm">
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            isActive ? "text-[#d72050]" : "text-[#374151] hover:text-[#d72050]"
          }
        >
          Wishlist
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-300">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden pl-5"
            style={{ color: "#374151" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#374151"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            style={{ backgroundColor: "#f3f4f6", color: "#374151" }}
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-2 md:pl-20">
          <img className="w-10 h-10" src={logo} alt="Logo" />
          <span
            className="font-bold text-xl tracking-wide"
            style={{ color: "#374151" }}
          >
            EchoJournal
          </span>
        </div>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-2 md:pr-20 pr-5">
        {user ? (
          <div className="flex gap-5 items-center">
            <div
              className="avatar tooltip tooltip-left cursor-pointer relative"
              data-tip={user.displayName}
            >
              <div
                className="ring-primary ring-offset-base-100 w-9 rounded-full ring-2 ring-offset-2"
                style={{ borderColor: "#d72050" }}
              >
                <img src={user.photoURL} />
              </div>
            </div>
            <button
              className="btn"
              style={{ backgroundColor: "#d72050", color: "#ffffff" }}
              onClick={handleSignout}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="space-x-3">
            <Link
              to="/signin"
              className="btn btn-sm btn-outline bg-[#d72050] text-[#ffffff]"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="btn btn-sm btn-outline bg-[#d72050] text-[#ffffff]"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
