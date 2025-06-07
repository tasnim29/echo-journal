import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const smallImage = [
  {
    img1: "https://i.ibb.co/KcxgP6Kd/techImg1.jpg",
    img2: "https://i.ibb.co/Kp4WwKkw/techImg2.webp",
  },
  {
    img1: "https://i.ibb.co/CptBbW3K/gym1.webp",
    img2: "https://i.ibb.co/zHJtnR9r/gym2.jpg",
  },
  {
    img1: "https://i.ibb.co/spPxhGRn/uclImg1.webp",
    img2: "https://i.ibb.co/sdX0w2JD/uclImg2.webp",
  },

  {
    img1: "https://i.ibb.co/WN9ZyqXG/iceland1.webp",
    img2: "https://i.ibb.co/nMwM08Xr/iceland2.jpg",
  },
];

const Hero = () => {
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
    <div className="w-full h-[500px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
      >
        {blogs.map((blog, index) => {
          const images = smallImage[index] || {};
          return (
            <SwiperSlide key={index}>
              <div
                className="w-full h-[500px] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${blog.image})` }}
              >
                <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6">
                  {/* Text Section */}
                  <div className="flex-1 bg-white/30 backdrop-blur-sm p-6 rounded-xl shadow-lg text-white text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl font-bold mb-2 drop-shadow-md text-primary">
                      {blog.title}
                    </h2>
                    <p className="text-md md:text-lg font-semibold text-white drop-shadow">
                      {blog.excerpt}
                    </p>
                    <button className="btn btn-secondary mt-5">
                      Read More
                    </button>
                  </div>

                  {/* Image Section */}
                  <div className="grid grid-cols-2 gap-5 flex-1">
                    {images.img1 && (
                      <motion.div
                        initial={{ x: 300, rotate: 180 }}
                        animate={{ x: 0, rotate: 0 }}
                        transition={{
                          duration: 1,
                          type: "spring",
                          repeat: Infinity,
                          repeatType: "loop",
                        }}
                        className="w-52 h-64 md:w-64 md:h-80"
                      >
                        <img
                          src={images.img1}
                          className="w-full h-full object-cover border-green-600 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                        />
                      </motion.div>
                    )}
                    {images.img2 && (
                      <motion.div
                        initial={{ x: 300, rotate: 180 }}
                        animate={{ x: 0, rotate: 0 }}
                        transition={{
                          duration: 1,
                          type: "spring",
                          repeat: Infinity,
                          repeatType: "loop",
                        }}
                        className="w-52 h-64 md:w-64 md:h-80"
                      >
                        <img
                          src={images.img2}
                          className="w-full h-full object-cover border-green-600 border-s-4 border-b-4 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                        />
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Hero;
