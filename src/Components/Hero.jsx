import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "motion/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { AuthContext } from "../Context/AuthContext";

const Hero = () => {
  const { theme } = React.useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./Blogs.json");
      const data = await res.json();
      setBlogs(data);
    };
    fetchData();
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className={`text-2xl md:text-6xl font-bold mb-4 ${
            theme === "dark" ? "text-yellow-500" : "text-[#d72050]"
          }`}
        >
          Welcome to the <span className="text-green-500">EchoJournal</span>
        </motion.h1>
        <p
          className={`max-w-2xl text-sm md:text-xl mb-6 ${
            theme === "dark" ? "text-base-200" : "text-gray-500"
          }`}
        >
          A space to express, explore, and engage — create your blog or connect
          with others.
        </p>

        <div className="w-full flex justify-center">
          <Swiper
            key={blogs.length}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id} style={{ width: "300px" }}>
                <div
                  style={{
                    backgroundImage: `url(${blog.image})`,
                    width: "300px",
                    height: "400px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "12px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    position: "relative",
                    color: "white",
                    border: "4px solid yellow",
                  }}
                >
                  <div
                    className="absolute bottom-2 left-2 p-2 rounded-md text-white"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
                  >
                    <h3 className="font-semibold">{blog.title}</h3>
                    <button className="btn btn-secondary">View More</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
