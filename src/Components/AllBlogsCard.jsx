import axios from "axios";
import React, { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";
// react-photo-view
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const AllBlogsCard = ({ blog }) => {
  const { user, theme } = use(AuthContext);
  const { _id, title, imageURL, short, category, name } = blog;
  const handleWishlist = () => {
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
      className={`card bg-gradient-to-br from-gray-100 via-gray-200 to-gray-500 shadow-lg ${
        theme === "dark" ? "border-4 border-yellow-500" : ""
      }`}
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

      <div className="card-body">
        <h2 className="card-title text-gray-700 text-xl font-bold">{title}</h2>
        <p className="text-sm font-semibold text-[#a3163a]">by {name}</p>
        <div className="badge badge-secondary">{category}</div>
        <p className="text-gray-700">{short}</p>
        <div className="card-actions justify-end">
          <Link
            to={`/blogDetails/${_id}`}
            className="btn btn-sm btn-outline bg-[#d72050] text-[#ffffff]"
          >
            Details{" "}
          </Link>
          <button
            onClick={handleWishlist}
            className="btn btn-sm btn-outline bg-[#d72050] text-[#ffffff]"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBlogsCard;
