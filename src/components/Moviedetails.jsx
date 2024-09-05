import React, { useEffect } from "react";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import { Link, useNavigate, useParams } from "react-router-dom";
const Moviedetails = () => {
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.movie);
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(info);

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, []);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1),rgba(0,0,0,.1)),
    url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen h-screen px-[10%]"
    >
      <nav className="h-[10vh] items-center w-full text-zinc-100 flex gap-10 text-2xl">
        <Link
          onClick={() => navigate(-1)}
          className=" hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>
        <a target="_blank" href={`https://en.wikipedia.org/wiki/${info.externalid.wikidata_id}`}>
          <i className="ri-earth-fill"></i>
        </a>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-home-4-fill"></i>
        </a>
        <a target="_blank" href={`https://www.imdb.com/title/${info.detail.imdb_id}`}>
          imdb
        </a>
      </nav>
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;
