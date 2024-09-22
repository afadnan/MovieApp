import React, { useEffect } from "react";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

const PersonDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.person);
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(info);

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);
  return info ? <div className="px-[15%] w-screen">
    {/* Part 1 navigation */}
  <nav className="items-center mt-5 mb-5 w-full text-zinc-100 flex gap-10 text-2xl">
    <Link
      onClick={() => navigate(-1)}
      className=" hover:text-[#6556CD] ri-arrow-left-line"
    ></Link>
    
  </nav>
  <div className="w-full flex flex-col">
    {/* Part 2 left Poster and Details  */}
    <div className="w-[20%]">
    <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]  h-[40vh]object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.profile_path
          }`}
          alt=""
        />
        <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
        <div className="text-2xl text-white flex gap-x-5">
        <a
      target="_blank"
      href={`https://en.wikipedia.org/wiki/${info.externalid.wikidata_id}`}
    >
      <i className="ri-earth-fill"></i>
    </a>
    <a
      target="_blank"
      href={`https://www.facebook.com/${info.externalid.facebook_id}`}
    >
      <i className="ri-facebook-circle-fill"></i>
    </a>
    <a
      target="_blank"
      href={`https://www.instagram.com/${info.externalid.instagram_id}`}
    >
      <i className="ri-instagram-fill"></i>
    </a>
    <a
      target="_blank"
      href={`https://www.twitter.com/${info.externalid.twitter_id}`}
    >
      <i className="ri-twitter-x-fill"></i>
    </a>

        </div>
    </div>
    {/* Part 3 right Details and information */}
    <div className="w-[80%]"></div>
  </div>
  </div>:( <Loading/>);
};

export default PersonDetails;
