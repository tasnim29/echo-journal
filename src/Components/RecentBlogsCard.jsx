import axios from "axios";
import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";

const RecentBlogsCard = ({ blog }) => {
  //   console.log(blog);
  const { user } = use(AuthContext);

  const { _id, title, imageURL, name, short } = blog;

  // handle wishlist
  const handleWishlist = () => {
    const wishlist = {
      blogId: _id,
      userEmail: user.email,
    };

    axios
      .post(
        `https://assignment-11-server-delta-nine.vercel.app/wishlist/${_id}`,
        wishlist
      )
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
    <div className="card bg-base-100  shadow-2xl hover:scale-105 lg:transition lg:duration-300">
      <figure className="px-10 pt-10">
        <img
          src={imageURL}
          alt={title}
          className="rounded-xl w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <h3>Author Name : {name}</h3>
        <p>{short}</p>
        <div className="card-actions">
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

export default RecentBlogsCard;
