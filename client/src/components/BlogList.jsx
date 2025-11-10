import React, { useState } from "react";
import BlogCard from "./BlogCard";
import { blog_data } from "../assets/assets";

const BlogList = () => {
  let activeLink =
    "bg-primary rounded-full text-white cursor-pointer px-5 py-2 text-sm";
  let notActiveLink = "text-gray-700 cursor-pointer text-sm py-2 ";
  const filters = ["All", "Technology", "Startup", "Lifestyle", "Finance"];
  const [currentLink, setCurrentLink] = useState("All");
  return (
    <div>
      <div className="flex items-center justify-center gap-6">
        {filters.map((filter, index) => (
          <button
            onClick={() => setCurrentLink(filter)}
            key={index}
            className={`${currentLink === filter ? activeLink : notActiveLink}`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between gap-3.5 gap-y-7 flex-wrap mt-8 w-[80%] m-auto ">
        {blog_data.map((blog, index) => (
          <BlogCard blog={blog} index={index} />
        ))}
      </div>
      <br />
      <br />
    </div>
  );
};

export default BlogList;
