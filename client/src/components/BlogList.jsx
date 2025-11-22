import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { blog_data } from "../assets/assets";
import { motion } from "motion/react";
import { useAppContext } from "../context/AppContext";

const BlogList = () => {
  const filters = ["All", "Technology", "Startup", "Lifestyle", "Finance"];
  const [currentLink, setCurrentLink] = useState("All");

  const { fetchBlogs } = useAppContext();
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div>
      <div className="flex items-center justify-center gap-2 relative my-10">
        {filters.map((filter, index) => (
          <div key={index} className="relative">
            <button
              onClick={() => setCurrentLink(filter)}
              className={`relative cursor-pointer text-gray-500 text-sm px-3.5 py-2 font-medium ${
                currentLink === filter && "text-white"
              }`}
            >
              {filter}
              {currentLink === filter && (
                <motion.div
                  layoutId="activeBackground"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute left-0 right-0 top-0 h-full bg-primary rounded-full -z-10 "
                />
              )}
            </button>
          </div>
        ))}
      </div>
      <div className="w-[84%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {blog_data.map((blog, index) => {
          if (currentLink === blog.category || currentLink === "All")
            return (
              <React.Fragment key={index}>
                <BlogCard blog={blog} index={index} />
              </React.Fragment>
            );
        })}
      </div>
    </div>
  );
};

export default BlogList;
