import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Trending from "../src/components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import Tvshows from "./components/Tvshows";
import People from "./components/People";
function App() {
  return (
    <div className=" bg-[#1F1E24] w-screen h-screen flex ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />;
        <Route path="/popular" element={<Popular />} />;
        <Route path="/movie" element={<Movie />} />;
        <Route path="/tv" element={<Tvshows />} />;
        <Route path="/people" element={<People />} />;
      </Routes>
    </div>
  );
}

export default App;
