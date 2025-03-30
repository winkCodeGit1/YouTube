import React from "react";
import VideoCard, { AddVideoCard } from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const videoInfo = useSelector((store) => store.videoSlice.videoList);
  if (!videoInfo) return null;

  return (
    <div className="flex flex-wrap justify-center">
      {videoInfo[0] && <AddVideoCard info={videoInfo[0]} />}
      {videoInfo?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video?.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
