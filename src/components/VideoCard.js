import React from "react";

const VideoCard = ({ info }) => {
  //   const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, viewCount } = info;
  return (
    <div className="w-64 m-2 shadow-lg">
      <img
        className="w-full h-36 object-cover rounded-t-lg"
        src={thumbnails?.medium?.url}
        alt={title}
      />
      <div className="p-2">
        <h3 className="font-semibold text-sm line-clamp-2">{title}</h3>
        <p className="text-gray-500 text-xs mt-1">{channelTitle}</p>
        <p className="text-gray-500 text-xs mt-1">
          {!viewCount ? 0 : viewCount} views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;

//This is a higher order component - This is a component which takes another component as an argument and returns a new component with additional functionality,props,logic and behaviour.

export const AddVideoCard = ({ info }) => {
  return (
    <div className="border border-red-600 rounded-lg p-2 ">
      <VideoCard info={info} />
    </div>
  );
};
