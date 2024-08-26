import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Cards from "./partials/Cards";
import Topnav from "./partials/Topnav";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("popular");
  const [person, setperson] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "Movie App | People ";
  const GetPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      //console.log(data);
      if (data.results.length > 0) {
        setperson((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
      console.log(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  //console.log(person);
  const refreshHandler = async () => {
    if (person.length === 0) {
      GetPerson();
    } else {
      setpage(1);
      setperson([]);
      GetPerson();
    }
  };
  useEffect(() => {
    refreshHandler();
  }, [category]);

  return person.length > 0 ? (
    <div className="w-screen h-screen   ">
      <div className="w-full flex items-center justify-between p-[2%] ">
        <h1 className=" text-2xl font-bold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="ml-[5%] text-[#07e1f5] hover:text-[#27a0ab] ri-arrow-left-line"
          ></i>
          People
        </h1>
        <div className="flex items-center w-[85%] mt-[3%]">
          <Topnav />
        </div>
      </div>
      <InfiniteScroll
        dataLength={person.length}
        next={GetPerson}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={person} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
