import React, { useState } from "react";
import profile from "../assets/profile.png";
import menu_burger from "../assets/menu_burger.png";
import search from "../assets/search.png";
import plus from "../assets/plus.png";
import Navbar from "../components/Navbar";

const Dashboard2 = () => {
  const [searchString, setSearchString] = useState("");
  return (
    <div className="w-[100dvw] h-[100dvh] flex flex-col">
      {/* left panel start */}
      <div className="left-panel w-[20%] h-[100%] absolute flex flex-col">
        <div className="container h-[75%] mx-6">
          <div className="w-full h-full flex flex-col justify-start items-center py-12 ">
            <div class="relative w-[80%]">
              <input
                type="search"
                id="default-search"
                class="block w-full p-2 pe-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#666666] dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
              <div class="absolute inset-y-0 end-0 flex items-center pe-5 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              {/* <button
              type="submit"
              class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button> */}
            </div>

            <div className=" w-[80%] ">
              <ul className="w-full">
                <li className=" w-full h-8 border border-black bg-white mt-6 rounded-md ps-2 pt-1">
                  Recent
                </li>
                <li className=" w-full h-8 border border-black bg-white mt-6 rounded-md ps-2 pt-1"></li>
                <li className=" w-full h-8 border border-black bg-white mt-6 rounded-md ps-2 pt-1"></li>
                <li className=" w-full h-8 border border-black bg-white mt-6 rounded-md ps-2 pt-1"></li>
                <li className=" w-full h-8 border border-black bg-white mt-6 rounded-md ps-2 pt-1"></li>

                <li className="mt-5 text-black">Search Data 1</li>
                <li className="mt-2 text-black">Search Data 2</li>
                <li className="mt-2 text-black">Search Data 3</li>
              </ul>
            </div>
          </div>
          <div className="  flex flex-col justify-center items-center w-[30%] gap-2 mt-5">
            <img src={menu_burger} width={60} alt="" />
            <img src={profile} width={50} alt="" />
          </div>
        </div>
      </div>

      <div className="absolute w-[25%] h-[15%] flex flex-col gap-5 justify-center items-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="text-3xl font-bold">
          <h2>Hello, {"{User}"}</h2>
        </div>
        <div className="w-full">
          <div className=" relative w-full h-10 border rounded-full flex flex-row justify-center items-center border-gray-600">
            <div class="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none w-full ">
              <svg
                class="w-5 h-5 text-blue-500 dark:blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <input
                type="text"
                id="search"
                class="block text-[16px] w-full ps-8 pe-5 text-sm text-black rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search or Upload Your Data Here"
                required
              />

              <img src={plus} alt="" width={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
