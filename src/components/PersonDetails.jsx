import React, { useEffect, useState } from "react";
import HorizontalCards from "./partials/HorizontalCards";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Dropdown from "./partials/Dropdown.jsx";
import Loading from "./Loading.jsx"

const PersonDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.person);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [category,setcategory ]=useState("movie");
  
  console.log(info);

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);
  return info ? <div className="px-[15%] h-[150vh] w-screen bg-[#1F1E24]">
    {/* Part 1 navigation */}
  <nav className="items-center mt-5 mb-5 w-full text-zinc-100 flex gap-10 text-2xl">
    <Link
      onClick={() => navigate(-1)}
      className=" hover:text-[#6556CD] ri-arrow-left-line"
    ></Link>
    
  </nav>
  <div className="w-full flex ">
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
        {/* Social Media Links */}
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
        {/* Personal information */}
        <h1 className="text-2xl text-zinc-400 font-semibold my-5">Person Info</h1>
        <h1 className="text-lg text-zinc-400 font-semibold ">Known For</h1>
        <h1 className="text-zinc-400 ">{info.detail.known_for_department}</h1>
        <h1 className="text-lg text-zinc-400 font-semibold ">Gender</h1>
        <h1 className="text-zinc-400 ">{info.detail.gender === 2 ? "Male" :"Female"}</h1>
        <h1 className="text-lg text-zinc-400 font-semibold ">Birthday</h1>
        <h1 className="text-zinc-400 ">{info.detail.birthday}</h1>
        <h1 className="text-lg text-zinc-400 font-semibold ">Deathday</h1>
        <h1 className="text-zinc-400 ">{info.detail.deathday ? info.detail.deathday : "Still Alive"}</h1>
        <h1 className="text-lg text-zinc-400 font-semibold ">Place Of Birth</h1>
        <h1 className="text-zinc-400 ">{info.detail.place_of_birth}</h1>
    </div>
    {/* Part 3 right Details and information */}
    <div className="w-[80%] ml-[5%]">
    <h1 className="text-5xl text-zinc-400 font-bold my-5">{info.detail.name}</h1>
        <h1 className="text-lg text-zinc-400 font-semibold ">Biography</h1>
        <p className="text-zinc-400 mt-3">{info.detail.biography}</p>
        
      <div className="w-full mt-6 flex justify-between">
        <h1 className=" text-xl text-zinc-400 font-semibold">Acting</h1>
        <Dropdown title="category" options={["tv", "movie"]} func={(e) => setcategory(e.target.value)} />
      </div>
    </div>
  </div>
  </div>:( <Loading/>);
};

export default PersonDetails;
