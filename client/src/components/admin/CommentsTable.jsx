import React from "react";
import { assets, comments_data } from "../../assets/assets";

const CommentsTable = () => {
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
    <table className="w-[95%] xl:w-[80%]  bg-white text-sm  rounded-lg table-fixed ">
      <thead className="">
        <tr className="border-gray-200  border-b">
          <th className="px-3 pb-3 pt-8  text-left ">BLOG TITLE & COMMENT</th>
          <th className="px-6  pb-3 pt-8  text-left">DATE</th>
          <th className="px-6  pb-3 pt-8  text-left">ACTION</th>
        </tr>
      </thead>
      <tbody>
        {comments_data.map((comment, index) => (
          <tr key={index} className="border-gray-200  border-b text-gray-600">
            <td className="ps-3 pe-6  py-7   ">
              <p className=" w-maxa">
                <span className="font-semibold ">Blog : </span>
                {comment.blog.title}
              </p>
              <div className="mt-7 flex flex-col gap-1  ">
                <p>
                  <span className="font-semibold">Name : </span>
                  {comment.name}
                </p>
                <p>
                  <span className="font-semibold">Comment : </span>
                  {comment.content}
                </p>
              </div>
            </td>
            <td className="px-6  py-3 align-top ">
              {formatDate(comment.createdAt)}
            </td>
            <td className="flex items-center gap-5 px-6  py-3">
              <img
                className="w-6 cursor-pointer"
                src={assets.tick_icon}
                alt=""
              />

              <img
                className="w-6 cursor-pointer"
                src={assets.bin_icon}
                alt=""
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CommentsTable;
