import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-[100%] h-[62vh] flex overflow-y-hidden">
      {data.map((d, i) => (
        <Link
          to={`/${d.media_type}/details/${d.id}`}
          key={i}
          className="min-w-[18%] h-[58vh] bg-zinc-900 mr-5 mb-5 "
        >
          <img
            className="w-full h-[45%] object-cover"
            src={`https://image.tmdb.org/t/p/original${
              d.backdrop_path || d.profile_path || d.poster_path
            }`}
            alt=""
          />
          <div className="text-white p-3 h-[45%] over-y-auto">
            <h1 className="mt-3  text-xl font-black text-white">
              {d.name || d.title || d.original_name || d.original_title}
            </h1>
            <p className="mt-3 mb-3 text-white">
              {d.overview.slice(0, 50)} ...
              <span className=" text-black text-zinc-500">more</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HorizontalCards;
