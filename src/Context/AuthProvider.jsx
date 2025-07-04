import React, { useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  // dark mode
  const [theme, setTheme] = useState(localStorage.theme || "light");
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   signUpUser
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   signin with google
  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  //   userLogin
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   signOut
  const signOutUser = () => {
    return signOut(auth);
  };

  //   update profile
  const updateUserProfile = (updatedObject) => {
    return updateProfile(auth.currentUser, updatedObject);
  };

  const userInfo = {
    user,
    setUser,
    createUser,
    googleLogin,
    userLogin,
    signOutUser,
    updateUserProfile,
    loading,
    theme,
    setTheme,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  // console.log("my name is", user);
  return (
    <div>
      <AuthContext value={userInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
