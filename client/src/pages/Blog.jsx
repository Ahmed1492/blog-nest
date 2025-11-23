import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blog_data, comments_data } from "../assets/assets";
import Footer from "../components/Footer";
import BlogDetails from "../components/BlogDetails";
import BlogComments from "../components/BlogComments";
import Loader from "../components/Loader";
import axios from "axios";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Blog = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  const { backEndUrl } = useAppContext();
  const getBlogData = async () => {
    try {
      let myBlog = await axios.get(`${backEndUrl}/api/blog/${id}`);
      // console.log(myBlog.data.blog);
      if (myBlog.data.success) {
        setBlog(myBlog.data.blog);
      } else {
        toast.error(myBlog.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getBlogData();
  }, [id]);

  if (!blog) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col gap-5 mt-6 ">
      <BlogDetails blog={blog} />
      <div className="w-[40%] m-auto  ">
        <BlogComments backEndUrl={backEndUrl} id={id} />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
