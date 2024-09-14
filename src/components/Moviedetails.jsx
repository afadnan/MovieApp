import React, { useEffect } from "react";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
const Moviedetails = () => {
  const { pathname } = useLocation();
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
  }, [id]);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1),rgba(0,0,0,.1)),
    url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen h-[165vh] px-[10%]"
    >
      {/* Part 1 navigation */}
      <nav className="h-[10vh] items-center w-full text-zinc-100 flex gap-10 text-2xl">
        <Link
          onClick={() => navigate(-1)}
          className=" hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>
        <a
          target="_blank"
          href={`https://en.wikipedia.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-home-4-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.detail.imdb_id}`}
        >
          imdb
        </a>
      </nav>

      {/* Part 2 Poster and details */}
      <div className="w-full h-[30%] flex">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]  h-[40vh]object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />
        <div className="content ml-[5%] text-white ">
          <h1 className="text-5xl font-black  ">
            {" "}
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}
            <small className="text-2xl font-bold text-zinc-100">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>
          <div className="mt-3 mb-2 flex text-zinc-100 items-center gap-x-5">
            {info.detail.vote_average && (
              <span
                className="
rounded-full text-xl font-semibold bg-[#f3c80b] text-white w-[5vh] h-[5vh] flex justify-center items-center "
              >
                {info.detail.vote_average !== undefined &&
                info.detail.vote_average !== null
                  ? info.detail.vote_average.toFixed(1)
                  : "N/A"}
              </span>
            )}

            <h1 className="w-[60px] font-semibold text-2xl lending-6">
              User Score
            </h1>
            <h1>{info.detail.release_date}</h1>
            <h1> {info.detail.genres.map((g) => g.name).join(",")} </h1>
            <h1> {info.detail.runtime}min </h1>
          </div>
          <h1 className="text-xl font-semibold italic text-zinc-200">
            {info.detail.tagline}
          </h1>
          <h1 className="text-2xl mt-2 mb-8">Overview</h1>
          <p className="mb-10">{info.detail.overview}</p>

          <Link
            className="p-5 bg-[#0BE0F3] text-black font-bold rounded-lg"
            to={`${pathname}/trailer`}
          >
            <i class="ri-play-fill mr-3"></i> Play Trailer
          </Link>
        </div>
      </div>
      {/* Part 3 Available on Platform */}
      <div className="w-[80%] flex flex-col gap-y-5 mt-10">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="mt-5 flex gap-x-10 item-center text-white">
            <h1>Available on Platforms</h1>
            {info.watchproviders.flatrate.map((w) => (
              <img
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex mt-5 gap-x-10 item-center text-white">
            <h1>Available on Rent</h1>
            {info.watchproviders.rent.map((w) => (
              <img
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex mb-8 mt-5 gap-x-10 item-center text-white">
            <h1>Available to Buy</h1>
            {info.watchproviders.buy.map((w) => (
              <img
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>
      {/* Part 4 Recommendation and Similar stuff*/}
      <hr className="mt-4 mb-4 border-none h-[2px] bg-zinc-500" />

      <h1 className="mt-4 mb-4 text-3xl font-bold text-white">
        Recommendation & Similar Stuff
      </h1>
      <HorizontalCards
        className="mt-10"
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet/>
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;
