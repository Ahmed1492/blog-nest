import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blog_data, comments_data } from "../assets/assets";
import Footer from "../components/Footer";
import BlogDetails from "../components/BlogDetails";
import BlogComments from "../components/BlogComments";
import Loader from "../components/Loader";

const Blog = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  const getBlogData = async () => {
    try {
      let myBlog = blog_data.find((b) => b._id == id);
      setBlog(myBlog);
      console.log(myBlog);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(comments_data[id]);
  let existingBlog = blog_data.filter((item) => item._id === id);

  useEffect(() => {
    getBlogData();
  }, [id]);

  if (!existingBlog || existingBlog.length === 0) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col gap-5 ">
      <BlogDetails blog={blog} />
      <div className="w-[40%] m-auto  ">
        <BlogComments />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
