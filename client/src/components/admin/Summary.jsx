import React from "react";

import { assets } from "../../assets/assets.js";
const Summary = () => {
  return (
    <div className="flex flex-wrap items-start gap-x-4 gap-y-5 mt-8">
      <div className="flex items-center gap-4 bg-white shadow px-5 py-3 text-sm md:text-base  rounded-lg min-w-[12rem]  md:w-[14rem] xl:w-[15rem]">
        <img className="w-10 md:w-14" src={assets.dashboard_icon_1} alt="" />
        <div className="flex flex-col items-centera  ">
          <span className="font-semibold text-lg text-gray-600">14</span>
          <span className="text-gray-500 font-extralight ">Blogs</span>
        </div>
      </div>
         <div className="flex items-center gap-4 bg-white shadow px-5 py-3 text-sm md:text-base  rounded-lg min-w-[12rem]  md:w-[14rem] xl:w-[15rem]">
        <img className="w-10 md:w-14" src={assets.dashboard_icon_2} alt="" />
        <div className="flex flex-col items-centera  ">
          <span className="font-semibold text-lg text-gray-600">5</span>
          <span className="text-gray-500 font-extralight ">Comments</span>
        </div>
      </div>
          <div className="flex items-center gap-4 bg-white shadow px-5 py-3 text-sm md:text-base  rounded-lg min-w-[12rem]  md:w-[14rem] xl:w-[15rem]">
        <img className="w-10 md:w-14" src={assets.dashboard_icon_3} alt="" />
        <div className="flex flex-col items-centera  ">
          <span className="font-semibold text-lg text-gray-600">7</span>
          <span className="text-gray-500 font-extralight ">Drafts</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
