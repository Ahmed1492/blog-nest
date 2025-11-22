import React from "react";
import { Link } from "react-router-dom";
import truncate from "html-truncate";

const BlogCard = ({ blog }) => {
  return (
    <Link
      to={`/blog/${blog._id}`}
      onClick={() => scrollTo(0, 0)}
      key={blog._id}
      className="flex flex-col gap-2 shadow-md rounded-lg w-88a pb-9 hover:scale-102 duration-300 overflow-hidden hover:shadow-2xl"
    >
      <img className="aspect-video rounded-t-lg" src={blog.image} alt="image" />
      <div className="flex flex-col gap-3 px-4">
        <p className=" py-1.5 px-4 text-sm text-primary bg-[#dcd9ff] font-semibold  rounded-full w-max mt-2 ">
          {blog.category}
        </p>
        <h3 className="font-medium">{blog.title} </h3>
        <p
          className="text-gray-500 text-sm leading-6"
          dangerouslySetInnerHTML={{ __html: truncate(blog.description, 80) }}
        />
      </div>
    </Link>
  );
};

export default BlogCard;
