import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      settrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  console.log(trending);
  useEffect(() => {
    GetTrending();
  }, [category, duration]);

  return trending ? (
    <div className=" py-[1%] px-[2%] w-screen h-screen overflow-hidden  overflow-y-auto ">
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

          <Dropdown
            title="Category"
            options={["movie", "tv", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[3%]"></div>
          <Dropdown
            title="Duration"
            options={["day", "week", "month"]}
            func={(e) => setduration(e.target.value)}
          />
        </div>
      </div>

      <Cards data={trending} title={category} />
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
