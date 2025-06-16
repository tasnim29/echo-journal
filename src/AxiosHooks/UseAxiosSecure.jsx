import axios from "axios";
import React, { use, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
// import { useNavigate } from "react-router";

const axiosInstance = axios.create({
  baseURL: "https://assignment-11-server-delta-nine.vercel.app",
});

const UseAxiosSecure = () => {
  const { user, signOutUser, loading } = use(AuthContext);
  // const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user?.accessToken) {
      //  request interceptor
      const requestInterceptor = axiosInstance.interceptors.request.use(
        (config) => {
          config.headers.Authorization = `Bearer ${user.accessToken}`;
          return config;
        }
      );

      //  response interceptor
      const responseInterceptor = axiosInstance.interceptors.response.use(
        (res) => res,
        (err) => {
          if (err?.response?.status === 401 || err?.response?.status === 403) {
            signOutUser()
              .then(() => {
                console.log("Logged out due to token issue.");
              })
              .catch(console.error);
          }
          return Promise.reject(err);
        }
      );

      // Cleanup to prevent multiple interceptors on re-renders
      return () => {
        axiosInstance.interceptors.request.eject(requestInterceptor);
        axiosInstance.interceptors.response.eject(responseInterceptor);
      };
    }
  }, [user, loading, signOutUser]);

  return axiosInstance;
};

export default UseAxiosSecure;
