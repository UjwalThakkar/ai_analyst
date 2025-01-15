import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" absolute top-0 left-0 nav-bar w-full h-[80px] flex flex-row-reverse font-bold text-xl px-16 gap-20 z-50">
      <button className="text-red-700">Logout</button>
      <ul className="flex justify-center items-center gap-20">
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/dashboard" >Preprocessing</Link></li>
        <li><Link to="/Graphs" >Graph</Link></li>
        <li><Link to="/" >Model Building</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
