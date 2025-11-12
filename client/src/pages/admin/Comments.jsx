import React from "react";
import CommentsTable from "../../components/admin/CommentsTable";

const Comments = () => {
  return (
    <div className="w-full mt-10 pb-10">
      <div className="flex items-center gap-2.5 my-7 text-left">
        <span className="font-medium">Comments</span>
      </div>
      <CommentsTable />
    </div>
  );
};

export default Comments;
