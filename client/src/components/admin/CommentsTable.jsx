import React from "react";
import { assets, comments_data } from "../../assets/assets";

const CommentsTable = ({ comments, deleteComment, approveComment, filter }) => {
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
    <table className="w-[95%]   lg:w-[88%]  xl:w-[70%]  bg-white   rounded-lg text-xs  md:text-sm ">
      <thead className="">
        <tr className="border-gray-200  text-gray-600 bordera ">
          <th className="px-3 py-2 pt-4  text-left  ">BLOG TITLE & COMMENT</th>
          <th className="px-6  py-2 pt-4  text-left">DATE</th>
          <th className="px-6  py-2 pt-4  text-left">ACTION</th>
        </tr>
      </thead>
      <tbody>
        {comments
          ?.filter((comment) => {
            if (filter === "Not Approved") return !comment.isApproved;
            if (filter === "Approved") return comment.isApproved;
            return true; // "All"
          })
          .map((comment, index) => (
            <tr key={index} className="border-gray-200 border-ba text-gray-600">
              <td className="ps-3 pe-6 py-4">
                <p>
                  <span className="font-semibold">Blog : </span>
                  {comment?.blog?.title}
                </p>
                <div className="mt-4 flex flex-col gap-1 mb-4">
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

              <td className="px-6 py-2">{formatDate(comment.createdAt)}</td>

              <td className="px-6 py-3">
                <div className="flex items-center  gap-2.5">
                  {!comment.isApproved ? (
                    <img
                      onClick={() => approveComment(comment._id)}
                      className="w-5 cursor-pointer"
                      src={assets.tick_icon}
                      alt=""
                    />
                  ) : (
                    <span className="bg-green-100 text-green-700 border border-green-600 px-3 py-1 rounded-full text-sm">
                      Approved
                    </span>
                  )}

                  <img
                    onClick={() => deleteComment(comment._id)}
                    className="w-5 cursor-pointer"
                    src={assets.bin_icon}
                    alt=""
                  />
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default CommentsTable;
