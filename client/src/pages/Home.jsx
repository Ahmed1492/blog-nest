import React from "react";
import Hero from "../components/Hero";
import BlogList from "../components/BlogList";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className=" ">
      <Hero />
      <BlogList />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
