import React, { useEffect, useState } from "react";
import { assets, dashboard_data } from "../../assets/assets";
import axios from "axios";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const LatestBlogs = ({ blogs, deleteBlog, toggleBlog }) => {
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
    <div className="mt-10">
      <div className="flex items-center gap-2.5 my-7 text-left">
        <img className="w-6" src={assets.dashboard_icon_4} alt="" />
        <span className="font-medium">Latest Blogs</span>
      </div>
      <table className="w-[95%] xl:w-[80%] bg-white text-sm  rounded-lg ">
        <thead className="">
          <tr className="border-gray-200  border-b">
            <th className="px-5  pb-3 pt-8  text-left  ">#</th>
            <th className="px-3 pb-3 pt-8  text-left">BLOG TITLE</th>
            <th className="px-6  pb-3 pt-8  text-left">DATE</th>
            <th className="px-6  pb-3 pt-8  text-left">STATUS</th>
            <th className="px-6  pb-3 pt-8  text-left">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.recentBlogs?.map((data, index) => (
            <tr key={index} className="border-gray-200  border-b text-gray-600">
              <td className="px-5  py-3 font-semibold ">{index + 1}</td>
              <td className="px-3  py-3 ">{data.title}</td>
              <td className="px-6  py-3 ">{formatDate(data.updatedAt)}</td>
              <td
                className={`px-6  py-3 ${
                  data.isPublished ? "text-green-500" : "text-red-500"
                }  font-bold `}
              >
                {data.isPublished ? "Published" : "Unpublished"}
              </td>
              <td className="flex items-center gap-3 px-6  py-3">
                <button
                  onClick={() => toggleBlog(data._id)}
                  className="border border-gray-400 px-4 py-3 rounded-md cursor-pointer min-w-28"
                >
                  {!data.isPublished ? "Published" : "Unpublished"}
                </button>
                <img
                  onClick={() => deleteBlog(data._id)}
                  className="w-9 cursor-pointer"
                  src={assets.cross_icon}
                  alt=""
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatestBlogs;
