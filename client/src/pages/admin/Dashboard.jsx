import React from "react";
import Summary from "../../components/admin/Summary";
import LatestBlogs from "../../components/admin/LatestBlogs";
const Dashboard = () => {
  return (
    <div className ="w-full">
      <Summary />
      <LatestBlogs/>
    </div>
  );
};

export default Dashboard;
