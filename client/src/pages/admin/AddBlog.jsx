import React from "react";
import { assets } from "../../assets/assets";

const AddBlog = () => {
  return (
    <div className="bg-white h-[80vh] w-[70%] mt-10 p-10">
      <div>
        <span className=" text-gray-600 ">Upload thumbnail</span>
        <label htmlFor="upload-image">
          <img
            className="w-28 mt-2 cursor-pointer"
            src={assets.upload_area}
            alt="upload icon"
          />
        </label>
        <input type="file" id="upload-image" className="hidden" />
      </div>
      {/* INPUTS */}
      <form className="mt-6 flex flex-col gap-2">
        <label className="text-gray-500" htmlFor="">
          Blog Title
        </label>
        <input
          type="text"
          className="w-108 px-2 py-2 outline-0 border border-gray-300 rounded-md"
          placeholder="Type here"
          name=""
          id=""
        />
        <label className="mt-2 text-gray-500" htmlFor="">
          Sub title
        </label>
        <input
          type="text"
          className="w-108 px-2 py-2 outline-0 border border-gray-300 rounded-md"
          placeholder="Type here"
          name=""
          id=""
        />

        <label className="mt-2 text-gray-500" htmlFor="">
          Sub Category
        </label>
        <select
          type="text"
          className="w-40 text-gray-400 px-2 py-2 outline-0 border border-gray-300 rounded-md"
          placeholder="Type here"
          name=""
          id=""
        >
          <option value="">option 1</option>
          <option value="">option 1</option>
          <option value="">option 1</option>
          <option value="">option 1</option>
          <option value="">option 1</option>
        </select>

        <div className="flex items-center gap-2 mt-3">
          <label className=" text-gray-500" htmlFor="">
            Publish now
          </label>
          <input className="" type="checkbox" />
        </div>

        <button className="bg-primary text-white rounded-md py-2.5 px-10 w-max font-light mt-7">
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
