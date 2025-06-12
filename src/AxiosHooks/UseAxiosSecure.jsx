import axios from "axios";
import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const UseAxiosSecure = () => {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();

  //   request interceptor
  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });
  //   response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log("this response error", error);
      if (error.status === 401 || error.status === 403) {
        signOutUser()
          .then(() => {
            console.log("signout user for 401 response code");
            navigate("/signin");
          })
          .catch((error) => {
            console.log(error);
          });
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default UseAxiosSecure;
