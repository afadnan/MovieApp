import React from "react";
import { Link } from "react-router-dom";
import noImage from "/noImage.jpg"
const HorizontalCards = ({ data }) => {
  return (
    <div className="w-[100%] h-[70vh] flex m-2 overflow-y-hidden">
      {data.length > 0 ? data.map((d, i) => (
        <Link
          to={`/${d.media_type}/details/${d.id}`}
          key={i}
          className="min-w-[25%] h-[65vh] bg-zinc-900 mr-5 mb-5 "
        >
          <img
            className="w-full h-[45%] object-cover"
            src={
              d.backdrop_path || d.profile_path || d.poster_path ?
              `https://image.tmdb.org/t/p/original${
              d.backdrop_path || d.profile_path || d.poster_path
            }`:noImage}
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
      )): <h1 className="text-3xl mt-5 text-white font-black text-center">Nothing to Show </h1>}
    </div>
  );
};

export default HorizontalCards;
