import React from "react";
import { assets } from "../../assets/assets.js";

const Summary = ({ blogs }) => {
  const items = [
    { count: blogs.blogs, label: "Blogs", icon: assets.dashboard_icon_1 },
    { count: blogs.comments, label: "Comments", icon: assets.dashboard_icon_2 },
    { count: blogs.draftBlogs, label: "Drafts", icon: assets.dashboard_icon_3 },
  ];

  return (
    <div className="flex flex-wrap items-start gap-6 mt-8">
      {items.map((item, i) => (
        <div
          key={i}
          className=" cursor-pointer
            flex items-center gap-4 
            bg-white shadow 
            px-6 py-4 
            rounded-xl 
            w-[14rem] md:w-[15rem] 
            hover:scale-[1.05] transition-all duration-200
          "
        >
          <img className="w-10 md:w-14" src={item.icon} alt="" />
          <div className="flex flex-col">
            <span className="font-semibold text-xl text-gray-700">
              {item.count}
            </span>
            <span className="text-gray-500 text-sm">{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Summary;
