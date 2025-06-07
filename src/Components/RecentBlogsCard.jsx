import React from "react";

const RecentBlogsCard = ({ blog }) => {
  //   console.log(blog);
  const { title, imageURL, name, short } = blog;
  return (
    <div className="card bg-base-100  shadow-2xl hover:scale-105">
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
          <button className="btn btn-sm btn-outline bg-[#d72050] text-[#ffffff]">
            Details{" "}
          </button>
          <button className="btn btn-sm btn-outline bg-[#d72050] text-[#ffffff]">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogsCard;
