import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const MainLayouts = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);
  return (
    <div className="lato-light">
      <div>
        <header>
          <Navbar></Navbar>
        </header>
        <main className=" min-h-[calc(100vh-398px)] ">
          <Outlet></Outlet>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
};

export default MainLayouts;
