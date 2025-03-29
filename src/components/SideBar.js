import React from "react";

import { exploreMenus, libraryMenus, mainMenus } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="grid-cols-1 w-[100%] h-screen bg-white-200 text-black p-4 overflow-y-auto no-scrollbar">
      <div className="space-y-4">
        {/* Main Menu */}
        <div>
          {mainMenus.map((menu) => (
            <div
              key={menu.name}
              onClick={() => navigate(menu.path)}
              className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-400  hover:text-white cursor-pointer"
            >
              {menu.icon}
              <span>{menu.name}</span>
            </div>
          ))}
        </div>

        <hr className="border-gray-700" />

        {/* Library */}
        <div>
          {libraryMenus.map((menu) => (
            <div
              key={menu.name}
              className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-400 hover:text-white cursor-pointer"
            >
              {menu.icon}
              <span>{menu.name}</span>
            </div>
          ))}
        </div>

        <hr className="border-gray-700" />

        {/* Explore */}
        <div>
          <h4 className="text-black-400 text-xl font-bold mb-2">Explore</h4>
          {exploreMenus.map((menu) => (
            <div
              key={menu.name}
              className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-400  hover:text-white cursor-pointer"
            >
              {menu.icon}
              <span>{menu.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
