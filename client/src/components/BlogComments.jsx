import React, {  useState } from "react";
import { assets, comments_data } from "../assets/assets";

const BlogComments = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const getDaysAgo = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    return `${diffDays} days ago`;
  };


  return (
    <>
      {/* All Comments */}
      <h2 className="text-xl font-semibold self-start my-6">
        Comments ({comments_data.length})
      </h2>
      {comments_data.map((comment) => (
        <div className="" key={comment._id}>
          <div className="w-full bg-gray-100  px-7 py-3 rounded-lg my-4">
            <div className="flex items-center gap-2 w-full text-gray-900 font-medium">
              <img className="w-6" src={assets.user_icon} alt="user_icone" />
              <span>{comment.name}</span>
            </div>
            <div className="flex items-center justify-between mt-4 text-gray-600">
              <span>{comment.content}</span>
              <span>{getDaysAgo(comment.updatedAt)}</span>
            </div>
          </div>
        </div>
      ))}
      {/* Add Comments */}
      <form>
        <h3 className="font-semibold my-7">Add your comment</h3>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="px-2 py-2.5 min-w-2xl border border-gray-200 rounded-md outline-0"
          placeholder="Name"
          value={name}
        />
        <textarea
          onChange={(e) => setComment(e.target.value)}
          className="px-2 py-2.5 min-w-2xl border border-gray-200 rounded-md outline-0 mt-5"
          name=""
          placeholder="Comment"
          id=""
          value={comment}
          rows={10}
        ></textarea>
        <button className="bg-primary text-white px-6 py-2.5 rounded-md mt-4">
          Submit
        </button>
      </form>

      {/* Social */}
      <h3 className="font-semibold mt-10 mb-5">
        Share this article on social media
      </h3>
      <div className="flex items-center gap-3">
        <img src={assets.facebook_icon} className="w-12" alt="facebook_icon" />
        <img src={assets.twitter_icon} className="w-12" alt="twitter_icon" />
        <img
          src={assets.googleplus_icon}
          className="w-12"
          alt="googleplus_icon"
        />
      </div>
    </>
  );
};

export default BlogComments;
