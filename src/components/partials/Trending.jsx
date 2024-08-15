import React from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./Topnav";
import Dropdown from "./Dropdown";

const Trending = () => {
  const navigate = useNavigate();
  return (
    <div className=" p-[2%] w-screen h-screen">
      <div className="w-full flex items-center justify-between ">
        <h1 className=" text-2xl font-bold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className=" text-[#07e1f5]  hover:text-[#27a0ab] ri-arrow-left-line"
          ></i>
          Trending
        </h1>

        <div className="flex items-center w-[85%] mt-[3%]">
          <Topnav />

          <Dropdown title="Category" options={["movie", "tv", "all"]} func="" />
          <div className="w-[3%]"></div>
          <Dropdown
            title="Duration"
            options={["day", "week", "month"]}
            func=""
          />
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Trending;
