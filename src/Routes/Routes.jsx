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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/blogs"),
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
        path: "/allBlog",
        Component: AllBlog,
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
