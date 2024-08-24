import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <>
      <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
        <h1 className="text-white font-bold text-2xl">
          <i className=" text-[#09e0f3] ri-movie-fill mr-3"></i>
          <span>Movie App.</span>
        </h1>
        <nav className="flex flex-col text-zinc-400 text-xl gap-3">
          <h1 className="text-white font-semibold text-xl mt-8 ">New Feeds</h1>
          <Link
            to="/trending"
            className="hover:bg-[#09e0f3] hover:text-white duration-300 rounded-md p-3"
          >
            <i className="mr-1 ri-fire-fill"></i>Trending
          </Link>
          <Link
            to="/popular"
            className="hover:bg-[#09e0f3] hover:text-white duration-300 rounded-md p-3"
          >
            <i className="mr-2 ri-vip-diamond-fill"></i>Popular
          </Link>
          <Link
            to="/movie"
            className="hover:bg-[#09e0f3] hover:text-white duration-300 rounded-md p-3"
          >
            <i className="mr-2 ri-movie-2-fill"></i>Movies
          </Link>
          <Link
            to="/tv"
            className="hover:bg-[#09e0f3] hover:text-white duration-300 rounded-md p-3"
          >
            <i className="mr-2 ri-tv-fill"></i>Tv Shows
          </Link>
          <Link
            to="/people"
            className="hover:bg-[#09e0f3] hover:text-white duration-300 rounded-md p-3"
          >
            <i className="mr-2 ri-star-fill"></i>People
          </Link>
        </nav>
        <hr className="border-none h-[1px] bg-zinc-400" />
        <nav className="flex flex-col text-zinc-400 text-xl gap-3">
          <h1 className="text-white  text-xl m-1">Website Information</h1>
          <Link
            className="hover:bg-[#09e0f3] hover:text-white duration-300 
rounded-md p-5"
          >
            <i className="mr-2 ri-information-2-fill"></i>About
          </Link>
          <Link
            className="hover:bg-[#09e0f3] hover:text-white duration-300 
rounded-md p-5"
          >
            <i className="mr-2 ri-account-box-fill"></i>Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidenav;
