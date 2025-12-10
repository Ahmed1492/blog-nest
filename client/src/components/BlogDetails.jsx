import React from "react";
import truncate from "truncate";
import { assets } from "../assets/assets";

const BlogDetails = ({ blog }) => {

  function formatDate(isoString) {
    const date = new Date(isoString);

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    const month = monthNames[date.getUTCMonth()];

    // Determine ordinal suffix
    const getOrdinal = (n) => {
      if (n > 3 && n < 21) return "th";
      switch (n % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${month} ${day}${getOrdinal(day)} ${year}`;
  }
  return (
    <div className="flex flex-col gap-5 items-center justify-center relative">
      <img
        className=" opacity-50   -top-40 -z-1 absolute"
        src={assets.gradientBackground}
        alt=""
      />
      <span className="text-primary font-medium">
        Published on {formatDate(blog.createdAt)}
      </span>
      <h3 className="max-w-3xl text-5xl text-center font-semibold text-gray-700">
        {blog.title}
      </h3>
      <p
        className="text-gray-600"
        dangerouslySetInnerHTML={{ __html: truncate(blog.subTitle) }}
      ></p>
      <button className="text-primary rounded-full border boreder-[#5044e5] py-1.5 px-4 text-sm cursor-pointer ">
        Ahmed Mohamed
      </button>
      <div className="">
        <img className="w-200 rounded-2xl" src={blog.image} alt="blogImage" />
      </div>
      <h3
        className="max-w-xl text-2xl font-semibold text-gray-700 "
        dangerouslySetInnerHTML={{ __html: truncate(blog.subTitle) }}
      ></h3>
      <div className="max-w-3xl  ">
        <p
          className="text-gray-600a rich-text"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        ></p>
      </div>
    </div>
  );
};

export default BlogDetails;
