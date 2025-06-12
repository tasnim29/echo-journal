import React, { useEffect, useState } from "react";

const AuthorSpotlight = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/allBlogs")
      .then((res) => res.json())
      .then((data) => {
        const uniqueAuthors = [];
        const emails = new Set();

        for (const blog of data) {
          if (!emails.has(blog.email)) {
            emails.add(blog.email);
            uniqueAuthors.push({
              name: blog.name,
              email: blog.email,
              photoURL: blog.photoURL,
            });
          }

          if (uniqueAuthors.length === 3) break;
        }

        setAuthors(uniqueAuthors);
      });
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          For Now
        </p>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold text-[#d72050] sm:text-4xl md:mx-auto ">
          <span className="relative inline-block">
            <span className="relative">The</span>
          </span>{" "}
          Author Spotlight
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Get to know the minds behind the blogs! Meet our featured authors,
          explore their journeys, and dive into their latest writings.
        </p>
      </div>

      <div className="grid gap-8 row-gap-10 lg:grid-cols-3">
        {authors?.map((author, index) => (
          <div
            key={index}
            className="text-center shadow-2xl p-3 lg:transition lg:duration-300 lg:hover:bg-indigo-100 hover:scale-105 cursor-pointer"
          >
            <div className="w-28 h-28 rounded-full ring-4 ring-[#d72050] ring-offset-2 ring-offset-white mx-auto mb-4 flex items-center justify-center">
              <img
                className="w-24 h-24 rounded-full object-cover"
                src={author.photoURL}
                alt={author.name}
              />
            </div>

            <h6 className="mb-2 text-xl font-semibold">{author.name}</h6>
            <p className="text-sm text-gray-600">{author.email}</p>
            <a className="mt-2 inline-block text-indigo-600 hover:underline">
              View Blogs
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorSpotlight;
