import axios from "axios";
import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";
// react-photo-view
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const RecentBlogsCard = ({ blog, index }) => {
  //   console.log(blog);
  const { user } = use(AuthContext);

  const { _id, title, imageURL, name, short } = blog;

  // handle wishlist
  const handleWishlist = () => {
    if (!user?.email) {
      return Swal.fire({
        title: "You haven't logged in?",
        text: "Please log in first...",
        icon: "question",
      });
    }
    const wishlist = {
      blogId: _id,
      userEmail: user.email,
    };

    axios
      .post(`http://localhost:3000/wishlist/${_id}`, wishlist)
      .then((result) => {
        console.log(result.data);
        Swal.fire({
          title: "Successfully added the blog in the wishlist",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="card bg-gradient-to-br from-gray-100 via-gray-200 to-gray-500 shadow-lg hover:scale-105 transition duration-300 rounded-lg"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="800"
      data-aos-easing="ease-out-cubic"
    >
      <PhotoProvider>
        <figure className="px-10 pt-10">
          <PhotoView src={imageURL}>
            <img
              src={imageURL}
              alt={title}
              className="rounded-xl w-full h-48 object-cover cursor-zoom-in"
            />
          </PhotoView>
        </figure>
      </PhotoProvider>

      <div className="card-body items-center text-center">
        <h2 className="card-title text-gray-700 text-xl font-bold">{title}</h2>
        <h3 className="font-semibold text-[#a3163a]">Author Name : {name}</h3>
        <p className="text-gray-700">{short}</p>
        <div className="card-actions space-x-3">
          <Link
            to={`/blogDetails/${_id}`}
            className="btn btn-sm bg-[#d72050] hover:bg-[#a3163a] text-white"
          >
            Details
          </Link>
          <button
            onClick={handleWishlist}
            className="btn btn-sm bg-[#d72050] hover:bg-[#a3163a] text-white"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogsCard;
