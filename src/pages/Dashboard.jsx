import React from "react";
import AI_logo from "../assets/AI_Logo.png";
import profile from "../assets/profile.png";
import menu_burger from "../assets/menu_burger.png";

const Dashboard = () => {
  return (
    <div className="w-[dvh] h-[100dvh] overflow-hidden bg-custom-400 relative">
      <div className="ellipse_container absolute w-full h-full z-0">
        <div className="bg-custom-500 w-[420px] h-[420px] opacity-70 rounded-full blur-3xl absolute top-[15%]"></div>
        <div className="bg-custom-500 w-[70px] h-[70px] opacity-70 rounded-full blur-xl absolute left-[50%] top-[45%] translate-x-[-50%] translate-y-[-50%]"></div>
        <div className="bg-custom-500 w-[150px] h-[150px] opacity-70 rounded-full blur-3xl absolute left-[50%] top-[80%] translate-x-[-50%] translate-y-[-80%]"></div>
        <div className="bg-custom-500 w-[120px] h-[120px] opacity-70 rounded-full blur-2xl absolute right-[-25px] bottom-[-25px]"></div>
      </div>
      <div className="content_container z-10 w-full h-full relative ">
        <div className="left_panel w-[20%] h-[75%] rounded-[80px] my-5 mx-2 container ">
          <div className="w-full h-full flex flex-col justify-start items-center py-12 ">
            <div class="relative w-[80%]">
              <input
                type="search"
                id="default-search"
                class="block w-full p-2 pe-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
              <div class="absolute inset-y-0 end-0 flex items-center pe-5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                <li className=" w-full h-8 border bg-white mt-6 rounded-md ps-2 pt-1">
                  Recent
                </li>
                <li className=" w-full h-8 border bg-white mt-6 rounded-md ps-2 pt-1"></li>
                <li className=" w-full h-8 border bg-white mt-6 rounded-md ps-2 pt-1"></li>
                <li className=" w-full h-8 border bg-white mt-6 rounded-md ps-2 pt-1"></li>
                <li className=" w-full h-8 border bg-white mt-6 rounded-md ps-2 pt-1"></li>

                <li className="mt-5 text-white">Search Data 1</li>
                <li className="mt-2 text-white">Search Data 2</li>
                <li className="mt-2 text-white">Search Data 3</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-[20%] gap-2">
            <img src={menu_burger} width={60} alt="" />
            <img src={profile} width={50} alt="" />
          </div>
        </div>
        <img
          src={AI_logo}
          width={400}
          className="absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
    </div>
  );
};

export default Dashboard;
