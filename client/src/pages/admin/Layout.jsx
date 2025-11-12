import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/admin/SideBar";

const Layout = () => {
  return (
    <div className="flex gap-10 bg-slate-100 min-h-[90vh] w-full">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Layout;
