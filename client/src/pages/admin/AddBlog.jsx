import React, { useEffect, useRef, useState } from "react";
import { assets, blogCategories } from "../../assets/assets";
import Quill from "quill";
const AddBlog = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("startup");
  const [isPublished, setIsPublished] = useState(false);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const generateContent = async () => {};

  useEffect(() => {
    // intitiate Quill only once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);

  return (
    <div className="w-full pb-8">
      <div className="bg-white min-h-[80vh] w-[70%] shadow  px-5 py-6 rounded-md">
        <div>
          <span className=" text-gray-600 ">Upload thumbnail</span>
          <label htmlFor="upload-image">
            <img
              className="w-28 mt-2 cursor-pointer"
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="upload icon"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="upload-image"
            className="hidden"
          />
        </div>
        {/* INPUTS */}
        <form onSubmit={onSubmitHandler} className="mt-6 flex flex-col gap-1">
          <label className="text-gray-600" htmlFor="">
            Blog Title
          </label>
          <input
            type="text"
            className="w-108 px-2 py-1.5 outline-0 border border-gray-300 rounded-md"
            placeholder="Type here"
            onChange={(e) => setTitle(e.target.value)}
            name=""
            id=""
          />
          <label className="mt-2 text-gray-600" htmlFor="">
            Sub title
          </label>
          <input
            type="text"
            className="w-108 px-2 py-1.5 outline-0 border border-gray-300 rounded-md"
            placeholder="Type here"
            onChange={(e) => setSubTitle(e.target.value)}
            name=""
            id=""
          />

          <p className="mt-4 text-gray-600">Blog Description</p>
          <div className="max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative">
            <div ref={editorRef}></div>
            <button
              className="absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer"
              onClick={generateContent}
              type="button"
            >
              Generate with AI
            </button>
          </div>

          <label className="mt-2 text-gray-600" htmlFor="">
            Sub Category
          </label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            className="w-40 text-gray-400 px-2 py-1.5 outline-0 border border-gray-300 rounded-md"
            placeholder="Type here"
          >
            <option value="">Select Category</option>
            {blogCategories.map((category, index) => (
              <option key={index} value={category}>
                {" "}
                {category}
              </option>
            ))}
          </select>

          <div className="flex items-center gap-2 mt-3">
            <label className=" text-gray-600" htmlFor="">
              Publish now
            </label>
            <input
              className="scale-125 cursor-pointer"
              checked={isPublished}
              onChange={(e) => setIsPublished(e.target.checked)}
              type="checkbox"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white rounded-md py-1.5 px-10 w-40 font-light mt-7 cursor-pointer"
          >
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
