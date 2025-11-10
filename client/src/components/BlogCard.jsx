import React from "react";
import { blog_data } from "../assets/assets";

const BlogCard = ({ blog }) => {
  blog_data;
  return (
    <div
      key={blog._id}
      className="flex flex-col gap-2 shadow-md rounded-lg w-88 pb-9"
    >
      <img className="w-88 rounded-t-lg" src={blog.image} alt="" />
      <div className="flex flex-col gap-3 px-4">
        <p className=" py-1.5 px-4 text-sm text-primary bg-[#dcd9ff] font-semibold  rounded-full w-max mt-2 ">
          {blog.category}
        </p>
        <h3 className="font-medium">{blog.title} </h3>
        <p className="text-gray-500 text-sm leading-6">
          A rem cumque excepturi atque quos, iure, quas, laboriosam quo iusto
          enim repellendus sed.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
