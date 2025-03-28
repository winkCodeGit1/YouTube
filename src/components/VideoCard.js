import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;
  return (
    <div className="w-64 m-2 shadow-lg">
      {/* Thumbnail */}
      <img
        className="w-full h-36 object-cover rounded-t-lg"
        src={thumbnails?.medium?.url}
        alt={title}
      />
      {/* Video Info */}
      <div className="p-2">
        <h3 className="font-semibold text-sm line-clamp-2">{title}</h3>
        <p className="text-gray-500 text-xs mt-1">{channelTitle}</p>
        <p className="text-gray-500 text-xs mt-1">
          {statistics?.viewCount} views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
