import React from "react";
import Hero from "../Components/Hero";
import RecentBlogs from "../Components/RecentBlogs";

const Home = () => {
  return (
    <div>
      <section>
        <Hero></Hero>
      </section>
      <div>
        <RecentBlogs></RecentBlogs>
      </div>
    </div>
  );
};

export default Home;
