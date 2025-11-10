import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[80%] m-auto py-5 mx-8 sm:mx-20 xl:mx-32">
      <div className="flex items-center justify-between">
        <img
          onClick={() => navigate("/")}
          className="w-32 sm:w-44 cursor-pointer"
          src={assets.logo}
          alt="logo"
        />
        <button
          onClick={() => navigate("/admin")}
          className="bg-primary text-sm text-white px-9 py-2.5 rounded-full flex items-center gap-2 cursor-pointer"
        >
          Login
          <img className="w-3" src={assets.arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
