import axios from "axios";
import React, { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";

const AllBlogsCard = ({ blog }) => {
  const { user } = use(AuthContext);
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
    <div className="card bg-base-100 shadow-2xl">
      <figure className="px-10 pt-10">
        <img
          src={imageURL}
          alt={title}
          className="rounded-xl w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm text-gray-500">by {name}</p>
        <div className="badge badge-secondary">{category}</div>
        <p>{short}</p>
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
