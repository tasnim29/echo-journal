import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

import { MdAutoDelete } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import UseAxiosSecure from "../AxiosHooks/UseAxiosSecure";
import Loader from "../Components/Loader";
import { Link } from "react-router";
// import axios from "axios";
import Swal from "sweetalert2";

const Wishlist = () => {
  const { user, theme } = use(AuthContext);
  const [wishlist, setWishlist] = useState([]);
  // const [sorting, setSorting] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = UseAxiosSecure();
  useEffect(() => {
    setLoading(true);
    axiosSecure(`/myWishlist/${user?.email}`)
      .then((data) => {
        // console.log(data?.data);
        setWishlist(data?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user, axiosSecure]);

  const handleRemove = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // axios
        axiosSecure
          .delete(`/wishlist/${id}`)
          .then((res) => {
            console.log("deleted", res.data);

            setWishlist((prev) => prev.filter((item) => item._id !== id));
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="overflow-x-auto max-w-7xl mx-auto mt-20">
      <h1
        className={`text-2xl md:text-5xl font-bold text-center mb-3 ${
          theme === "dark" ? "text-yellow-500" : "text-[#d72050]"
        }`}
      >
        WishListed Blogs
      </h1>
      <p className="text-center text-gray-400 font-semibold mb-8">
        These are the blogs that you wanted to read for later!!
      </p>
      <table className="table mb-20">
        {/* head */}
        <thead>
          <tr
            className={`  transition duration-1000 ${
              theme === "dark" ? "text-white " : "text-black"
            }`}
          >
            <th>No</th>
            <th>title</th>
            <th>Category</th>
            <th>Author</th>
            <th>Address</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((blog, index) => (
            <tr key={blog._id}>
              <td className="px-4 py-2">{index + 1}</td>

              {/* Title */}
              <td className="px-4 py-2 font-bold">{blog.title}</td>

              {/* Category */}
              <td className="px-4 py-2">{blog.category}</td>

              {/* Author */}
              <td className="px-4 py-2">{blog.name}</td>

              {/* Address */}
              <td className="px-4 py-2">{blog.address}</td>

              {/* Actions */}
              <td className="px-4 py-2 flex items-center gap-4">
                {/* see details */}
                <Link
                  className={`${theme === "dark" ? "text-white" : ""}`}
                  to={`/blogDetails/${blog.blogId}`}
                >
                  <TbListDetails size={24} />
                </Link>
                {/* remove from wishlist */}
                <button
                  onClick={() => handleRemove(blog._id)}
                  className={`cursor-pointer ${
                    theme === "dark" ? "text-white" : ""
                  }`}
                >
                  <MdAutoDelete size={24} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Wishlist;
