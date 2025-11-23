import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Hero = () => {
  const { blogs, input, setInput } = useAppContext();

  return (
    <div className="">
      <div className="bg-hero flex items-center flex-col justify-center gap-8 h-full relative">
        <img
          className=" opacity-50   -top-40 -z-1 absolute"
          src={assets.gradientBackground}
          alt=""
        />
        <p className="flex items-center gap-2 py-2.5 px-10 text-primary bg-[#dcd9ff] font-semibold text-sm rounded-full w-max ">
          New: AI feature integrated
          <img className="w-3" src={assets.star_icon} alt="" />
        </p>
        <h2 className="text-6xl text-center font-semibold">
          Your own <span className="text-primary">blogging</span> <br />{" "}
          platform.
        </h2>
        <p className="text-center text-slate-500 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
          voluptatem esse nihil necessitatibus possimus nobis iusto, libero
          quisquam omnis a dolorem reiciendis minus quod. Esse qui commodi harum
          incidunt nam!
        </p>
        <div className="bg-white py-1.5 ps-3 pe-1 border border-gray-300 rounded-lg min-w-120 flex justify-between items-center  ">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="outline-0 border-0 w-[80%]"
            type="text"
            placeholder="Search blogs"
          />
          <button className="bg-primary py-2.5 px-10 rounded-md text-white">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
