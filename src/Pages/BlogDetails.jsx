import React, { use, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { BsThreeDots } from "react-icons/bs";
import Loader from "../Components/Loader";

const BlogDetails = () => {
  const blog = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [editButton, setEditButton] = useState(false);
  const [comments, setComments] = useState([]);
  const { user, theme } = use(AuthContext);
  const {
    _id,
    title,
    imageURL,
    name,
    short,
    long,
    address,
    category,
    email,
    photoURL,
  } = blog;

  useEffect(() => {
    setLoading(true);
    axios(`https://assignment-11-server-delta-nine.vercel.app/comments/${_id}`)
      .then((data) => {
        // console.log(data?.data);
        setComments(data?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [_id]);

  // console.log(comments);

  const handleComment = (e) => {
    e.preventDefault();
    if (user.email == email) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Can not comment on own blog",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
    e.preventDefault();
    const commentText = e.target.comment.value;
    const commenterInfo = {
      blogId: _id,
      comment: commentText,
      userName: user.displayName,
      userPhoto: user.photoURL,
    };

    // axios
    axios
      .post(
        `https://assignment-11-server-delta-nine.vercel.app/comments/${_id}`,
        commenterInfo
      )
      .then((result) => {
        console.log(result.data);
        setComments((prevComments) => [...prevComments, commenterInfo]);
      })
      .catch((error) => {
        console.log(error);
      });

    e.target.reset();
  };

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div
      className={`rounded-md shadow-2xl max-w-2xl mx-auto my-20 px-5 ${
        theme === "dark" ? "border-4 border-yellow-500" : ""
      }`}
    >
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-2">
          <img
            src={photoURL}
            alt=""
            className="object-cover object-center w-8 h-8 rounded-full shadow-sm  "
          />
          <div className="-space-y-1">
            <h2 className="text-sm font-semibold leading-none">{name}</h2>
            <span className="inline-block text-xs leading-none dark:text-gray-600">
              {address}
            </span>
          </div>
        </div>
        {/* edit button */}
        <div className="relative">
          <button
            onClick={() => setEditButton(!editButton)}
            className="cursor-pointer"
            title="Open options"
            type="button"
          >
            <BsThreeDots size={24} />
          </button>
          {editButton && (
            <div>
              {user?.email === email ? (
                <Link
                  to={`/updateBlog/${_id}`}
                  className="cursor-pointer absolute right-0 mt-2 bg-gray-800 text-base-200 px-8 py-2 border rounded-md font-semibold transition-all duration-2000 transform origin-top-right scale-100 opacity-100 z-50"
                >
                  Edit
                </Link>
              ) : (
                <button
                  onClick={() => {
                    console.log("Edit button clicked");
                  }}
                  className="cursor-pointer absolute right-0 mt-2 bg-gray-800 text-base-200 px-8 py-2 border rounded-md font-semibold transition-all duration-2000 transform origin-top-right scale-100 opacity-100 z-50 whitespace-nowrap"
                >
                  {user ? (
                    "you don't have permission to edit 😔"
                  ) : (
                    <Link to="/signin">Click to log in 👉</Link>
                  )}
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="px-3 mb-2">
        <span className="text-xs font-medium text-white bg-blue-600 px-2 py-0.5 rounded-full">
          {category}
        </span>
        <h1 className="text-xl font-bold mt-1">{title}</h1>
      </div>
      <img
        src={imageURL}
        alt=""
        className="w-full h-auto rounded-md object-contain "
      />
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              type="button"
              title="Like post"
              className="flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
              </svg>
            </button>
            <button
              type="button"
              title="Add a comment"
              className="flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M496,496H480a273.39,273.39,0,0,1-179.025-66.782l-16.827-14.584C274.814,415.542,265.376,416,256,416c-63.527,0-123.385-20.431-168.548-57.529C41.375,320.623,16,270.025,16,216S41.375,111.377,87.452,73.529C132.615,36.431,192.473,16,256,16S379.385,36.431,424.548,73.529C470.625,111.377,496,161.975,496,216a171.161,171.161,0,0,1-21.077,82.151,201.505,201.505,0,0,1-47.065,57.537,285.22,285.22,0,0,0,63.455,97L496,457.373ZM294.456,381.222l27.477,23.814a241.379,241.379,0,0,0,135,57.86,317.5,317.5,0,0,1-62.617-105.583v0l-4.395-12.463,9.209-7.068C440.963,305.678,464,262.429,464,216c0-92.636-93.309-168-208-168S48,123.364,48,216s93.309,168,208,168a259.114,259.114,0,0,0,31.4-1.913Z"></path>
              </svg>
            </button>
            <button
              type="button"
              title="Share post"
              className="flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"></path>
              </svg>
            </button>
          </div>
          <button
            type="button"
            title="Bookmark post"
            className="flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
            </svg>
          </button>
        </div>

        <div className="space-y-3">
          <p className="text-sm mt-5">
            <span className="text-base font-semibold mr-3">{name}</span>
            <span>{short}</span>
          </p>
          <p className="text-lg">
            <span className="text-base font-semibold mr-2">Brief:</span>
            <span>{long}</span>
          </p>

          <form onSubmit={handleComment}>
            <textarea
              rows={3}
              name="comment"
              placeholder="Add a comment..."
              className="w-full p-2 rounded text-sm border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d72050] dark:bg-white dark:text-gray-900"
            />
            <button type="submit" className="btn btn-primary">
              Add Comment
            </button>
          </form>
        </div>

        {/*  COMMENTS LIST  */}
        <div className="space-y-2 mt-5">
          <h3 className="text-sm font-semibold">Comments</h3>
          {comments.map((comment, index) => (
            <div key={index}>
              <div className="flex gap-2 items-center mb-3">
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                    <img src={comment.userPhoto} />
                  </div>
                </div>
                <div>
                  <p className="font-semibold">{comment.userName}</p>
                </div>
                <div className="p-2 rounded bg-gray-100 text-sm">
                  <p className="text-gray-700 ">{comment.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
