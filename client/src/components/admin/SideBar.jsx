import React from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
const SideBar = () => {
  const linkBase =
    "flex items-center gap-4 py-4 ps-10 duration-100 cursor-pointer hover:bg-slate-100";

  return (
    <div className="bg-white  py-5 min-w-[20rem] sm:min-w-[16rem] md:min-w-[18rem] lg:min-w-[21rem]  xl:min-w-[18%] shadow">
      <ul className="flex flex-col gap-3 text-gray-800 font-medium">
        <li>
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? "bg-slate-100 border-e-4 border-e-[#5044E5]" : ""
              }`
            }
          >
            <img
              className="w-6"
              src={assets.home_icon}
              alt="dashboard_icon_1"
            />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/admin/add-blog"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? "bg-slate-100 border-e-4 border-e-[#5044E5]" : ""
              }`
            }
          >
            <img className="w-6" src={assets.add_icon} alt="dashboard_icon_2" />
            <span>Add blogs</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/admin/list-blog"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? "bg-slate-100 border-e-4 border-e-[#5044E5]" : ""
              }`
            }
          >
            <img
              className="w-6"
              src={assets.list_icon}
              alt="dashboard_icon_3"
            />
            <span>Blogs list</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/admin/comments"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? "bg-slate-100 border-e-4 border-e-[#5044E5]" : ""
              }`
            }
          >
            <img
              className="w-6"
              src={assets.comment_icon}
              alt="dashboard_icon_4"
            />
            <span>Comments</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
