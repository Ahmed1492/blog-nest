import React from "react";
import { assets } from "../assets/assets";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
const Navbar = () => {
  const { navigate, token, setToken } = useAppContext();
  const path = useLocation().pathname;

  return (
    <div className="shadow bg-white  border border-gray-200">
      <div className="w-[80%]  m-auto py-5 mx-8 sm:mx-20 xl:mx-32">
        <div className="flex items-center justify-between">
          <img
            onClick={() => navigate("/")}
            className="w-32 sm:w-44 cursor-pointer"
            src={assets.logo}
            alt="logo"
          />
          {path.includes("admin") && token && (
            <button
              onClick={() => {
                localStorage.removeItem("blog-nest-token");
                setToken(null);
              }}
              className="bg-primary text-sm text-white px-9 py-2.5 rounded-full flex items-center gap-2 cursor-pointer"
            >
              LogOut
            </button>
          )}

          {!path.includes("admin") && (
            <button
              onClick={() => {
                navigate("/admin");
              }}
              className="bg-primary text-sm text-white px-9 py-2.5 rounded-full flex items-center gap-2 cursor-pointer"
            >
              {token ? "Dashboard" : "Login"}
              <img className="w-4" src={assets.arrow} alt="" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
