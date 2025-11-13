import React, { useEffect, useState } from "react";
import CommentsTable from "../../components/admin/CommentsTable";
import { comments_data } from "../../assets/assets";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");
  const fetchComments = async () => {
    try {
      setComments(comments_data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);
  return (
    <div className="w-full mt-10 pb-10">
      <div className="flex items-center justify-between w-[95%]   lg:w-[88%]  xl:w-[70%] gap-2.5 mt-7 mb-4 text-left px-3">
        <span className="font-medium">Comments</span>
        <div className="flex gap-4">
          <button
            onClick={() => setFilter("Approved")}
            className={`shadow-custom-sm border border-full px-4 py-1.5 cursor-pointer text-xs rounded-full ${
              filter === "Approved" ? "text-primary" : "text-gray-700"
            }`}
          >
            Approved
          </button>
          <button
            onClick={() => setFilter("Not Approved")}
            className={`shadow-custom-sm border border-full px-4 py-1.5 cursor-pointer text-xs rounded-full ${
              filter === "Not Approved" ? "text-primary" : "text-gray-700"
            }`}
          >
            Not Approved
          </button>
        </div>
      </div>
      <CommentsTable />
    </div>
  );
};

export default Comments;
