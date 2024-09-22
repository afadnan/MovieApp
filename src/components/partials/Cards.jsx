import React from "react";
import { Link } from "react-router-dom";
import noImage from "/noImage.jpg";
const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap w-[full] mt-[2%] h-full  px-[4%] bg-[#1F1E24]  ">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          className="relative w-[25vh] mr-[5%] mb-[5%]  "
          key={i}
        >
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]  h-[40vh]object-cover"
            src={
              c.poster_path || c.backdrop_path || c.profile_path ?`https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path || c.profile_path
            }`:noImage}
            alt=""
          />
          <h1 className="text-xl text-zinc-300 mt-3 font-semibold">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>
          {c.vote_average && (
            <div className="absolute right-[-10%] bottom-[25%] rounded-full text-xl font-semibold bg-[#f3c80b] text-white w-[5vh] h-[5vh] flex justify-center items-center ">
              {c.vote_average !== undefined && c.vote_average !== null
                ? c.vote_average.toFixed(1)
                : "N/A"}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
