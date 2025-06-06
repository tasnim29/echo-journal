import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loader from "../Components/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return <Loader></Loader>;
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/signin"></Navigate>;
};

export default PrivateRoute;
