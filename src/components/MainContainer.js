import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import useGetVideoData from "../hooks/useGetVideoData";

const MainContainer = () => {
  useGetVideoData();
  return (
    <div className="grid-cols-11 w-[100%]  h-screen bg-white-200 text-black p-4 overflow-y-auto no-scrollbar">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
