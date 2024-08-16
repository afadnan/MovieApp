import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  //console.log(data);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1),rgba(0,0,0,.1)),
        url(https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.profile_path || data.poster_path
              })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[50vh] flex flex-col justify-end p-[5%] items-start "
    >
      <h1 className="w-[70%] mt-2 text-3xl font-black text-white">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%] mt-3 mb-3 text-white">
        {data.overview.slice(0, 100)} ...
        <Link className=" text-black text-blue-500">more</Link>
      </p>
      <p className="text-white">
        <i className="text-[#09e0f3] ri-megaphone-fill"></i>{" "}
        {data.release_date || "No Information"}
        <i className="ml-5 text-[#09e0f3] ri-album-fill"></i>
        {data.media_type.toUpperCase()}
      </p>

      <Link className="mt-3 p-2 bg-[#09e0f3] font-semibold text-white rounded-md">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
