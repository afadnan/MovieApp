import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Trending from "../src/components/Trending";
import Popular from "./components/Popular";
function App() {
  return (
    <div className=" bg-[#1F1E24] w-screen h-screen flex ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />;
        <Route path="/popular" element={<Popular />} />;
      </Routes>
    </div>
  );
}

export default App;
