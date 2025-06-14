import React, { useState } from "react";
import Hero from "../Components/Hero";
import RecentBlogs from "../Components/RecentBlogs";
import NewsLetter from "../Components/NewsLetter";
import TipsSection from "../Components/TipsSection";
import Loader from "../Components/Loader";
import AuthorSpotlight from "../Components/AuthorSpotlight";

const Home = () => {
  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 800);
  if (load) return <Loader></Loader>;
  return (
    <div>
      <section>
        <Hero></Hero>
      </section>
      <div>
        <RecentBlogs></RecentBlogs>
      </div>
      <div>
        <TipsSection></TipsSection>
      </div>
      {/* <div>
        <AuthorSpotlight></AuthorSpotlight>
      </div> */}
      <div>
        <NewsLetter></NewsLetter>
      </div>
    </div>
  );
};

export default Home;
