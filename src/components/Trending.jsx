import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      //settrending(data.results);
      settrending((prevState) => [...prevState, ...data.results]);
      setpage(page + 1);
      console.log(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  //console.log(trending);
  useEffect(() => {
    GetTrending();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-screen h-screen  ">
      <div className="w-full flex items-center justify-between px-[4%] ">
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
            options={["day", "week"]}
            func={(e) => setduration(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={true}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
