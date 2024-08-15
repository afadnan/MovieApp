import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import Trending from "./components/partials/Trending";
function App() {
  return (
    <div className=" bg-[#1F1E24] w-screen h-screen flex ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />;
      </Routes>
    </div>
  );
}

export default App;
