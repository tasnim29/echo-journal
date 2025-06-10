import { createBrowserRouter } from "react-router";
import React from "react";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import AddBlog from "../Pages/AddBlog";
import AllBlog from "../Pages/AllBlog";
import FeaturedBlog from "../Pages/FeaturedBlog";
import Wishlist from "../Pages/Wishlist";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import BlogDetails from "../Pages/BlogDetails";
import UpdateBlog from "../Pages/UpdateBlog";
import Loader from "../Components/Loader";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Loader></Loader>,
        loader: () =>
          fetch("https://assignment-11-server-delta-nine.vercel.app/blogs"),
        Component: Home,
      },
      {
        path: "/addBlog",
        element: (
          <PrivateRoute>
            <AddBlog></AddBlog>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateBlog/:id",
        hydrateFallbackElement: <Loader></Loader>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-delta-nine.vercel.app/blogs/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateBlog></UpdateBlog>
          </PrivateRoute>
        ),
      },
      {
        path: "/allBlog",

        Component: AllBlog,
      },
      {
        path: "/blogDetails/:id",
        hydrateFallbackElement: <Loader></Loader>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-delta-nine.vercel.app/blogs/${params.id}`
          ),
        Component: BlogDetails,
      },
      {
        path: "/featuredBlog",

        Component: FeaturedBlog,
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <Wishlist></Wishlist>
          </PrivateRoute>
        ),
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
    ],
  },
]);
