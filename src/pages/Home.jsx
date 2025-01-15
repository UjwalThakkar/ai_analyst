import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="w-[100dvw] h-[100dvh] flex flex-col">
      <div className="w-full h-full flex flex-col items-center justify-center relative bottom-12">
        <h1 className="text-[3rem]">AI Data Analyst</h1>
        <h2 className="text-[1.7rem]">
          "Effortless Machine Learning: Upload, Analyze, and Deploy - No Code
          Required!"
        </h2>
        <div className="absolute w-full top-[60%] bottom-0 flex justify-center items-center gap-[1px]">
          <div className="box_pattern mt-16"></div>
          <div className="box_pattern"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
