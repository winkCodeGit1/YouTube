import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const ToggleSideBar = useSelector((store) => store.slidebar?.toggleSliceBar);

  return (
    <div className="grid grid-flow-col">
      {ToggleSideBar && <SideBar />}
      <Outlet />
    </div>
  );
};

export default Body;
