import React from "react";
import ListBlogTable from "../../components/admin/ListBlogTable";

const ListBlogs = () => {
  return (
    <div className="mt-10 w-full">
      <div className="flex items-center gap-2.5 my-7 text-left">
        <span className="font-medium">All Blogs</span>
      </div>
      <ListBlogTable />
    </div>
  );
};

export default ListBlogs;
