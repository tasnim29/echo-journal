import React from "react";

const AllBlogsCard = ({ blog }) => {
  const { title, imageURL, short, category } = blog;
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
        <div className="badge badge-secondary">{category}</div>
        <p>{short}</p>
        <div className="card-actions justify-end">
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

export default AllBlogsCard;
