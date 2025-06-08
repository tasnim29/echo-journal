import React from "react";
import Hero from "../Components/Hero";
import RecentBlogs from "../Components/RecentBlogs";
import NewsLetter from "../Components/NewsLetter";

const Home = () => {
  return (
    <div>
      <section>
        <Hero></Hero>
      </section>
      <div>
        <RecentBlogs></RecentBlogs>
      </div>
      <div>
        <NewsLetter></NewsLetter>
      </div>
    </div>
  );
};

export default Home;
