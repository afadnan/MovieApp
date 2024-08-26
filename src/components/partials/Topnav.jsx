import axios from "../../utils/axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import noImage from "../../../public/noImage.jpg";

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
      //     console.log(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    GetSearches();
  }, [query]);
  return (
    <div className="w-[80%] h-[10vh] relative flex mx-auto item-center">
      <i className="text-zinc-100 text-3xl ri-search-eye-fill"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] h-[5vh] mx-10 p-5 text-xl outline-none border-none bg-transparent text-zinc-200"
        type="text"
        placeholder="Search Anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-zinc-200 text-3xl ri-close-circle-line"
        ></i>
      )}
      <div className="z-[9999] absolute w-[50%] max-h-[40vh] bg-zinc-200 top-[100%] left-[6%] overflow-auto ">
        {searches.map((s, i) => (
          <Link
            key={i}
            className=" hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 "
          >
            <img
              className="w-[15vh] h-[15vh] object-cover rounded-md mr-5"
              src={
                s.backdrop_path || s.profile_path || s.poster_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path || s.poster_path
                    }`
                  : noImage
              }
              alt=""
            />
            <span>
              {s.name || s.title || s.original_title || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
