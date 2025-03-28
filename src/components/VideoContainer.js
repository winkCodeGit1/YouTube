import React, { useEffect } from "react";
import { Youtube_API_URL } from "../utils/constants";

const VideoContainer = () => {
  useEffect(() => {
    getYouTubeVideos();
  }, []);

  const getYouTubeVideos = async () => {
    const data = await fetch(Youtube_API_URL);

    const json_data = await data.json();
    console.log(json_data, "-----jsondata");
  };
  return <div>VideoContainer</div>;
};

export default VideoContainer;
