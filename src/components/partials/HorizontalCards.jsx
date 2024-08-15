import React from "react";
import Dropdown from "./Dropdown";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-[100%] h-[65vh] flex overflow-y-hidden">
      {data.map((d, i) => (
        <div key={i} className="min-w-[18%] bg-zinc-900 mr-5 mb-5 ">
          <img
            className="w-full h-[45%] object-cover"
            src={`https://image.tmdb.org/t/p/original${
              d.backdrop_path || d.profile_path || d.poster_path
            }`}
            alt=""
          />
          <div className="text-white p-3 h-[45%]">
            <h1 className="mt-3  text-xl font-black text-white">
              {d.name || d.title || d.original_name || d.original_title}
            </h1>
            <p className="mt-3 mb-3 text-white">
              {d.overview.slice(0, 50)} ...
              <span className=" text-black text-zinc-500">more</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalCards;
