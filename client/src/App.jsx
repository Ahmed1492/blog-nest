import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Dashboard from "./pages/admin/Dashboard";
import Layout from "./pages/admin/Layout";
import AddBlog from "./pages/admin/AddBlog";
import Comments from "./pages/admin/Comments";
import ListBlogs from "./pages/admin/ListBlogs";
import Login from "./components/admin/Login";
import "quill/dist/quill.snow.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/admin" element={false ? <Login /> : <Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="comments" element={<Comments />} />
          <Route path="list-blog" element={<ListBlogs />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
