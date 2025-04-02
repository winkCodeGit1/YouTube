import React from "react";
import { REACT_APP_YOUTUBE_KEY } from "../utils/constants";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { addVideoList } from "../utils/videoSlice";

const SuggestionComponent = ({ searchText, searchResults }) => {
  const dispatch = useDispatch();

  const handleSearchRender = async (text) => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchText}&key=${REACT_APP_YOUTUBE_KEY}`
    );

    const json_data = await data.json();
    console.log(json_data, "-----searchData ytb");

    const extractobj = json_data?.items?.map((itm) => ({
      id: itm?.id?.videoId,
      title: itm?.snippet?.title,
      channelTitle: itm?.snippet?.channelTitle,
      thumbnails: itm?.snippet?.thumbnails,
      viewCount: "",
    }));

    console.log(extractobj, "-----extractobj");

    dispatch(addVideoList(extractobj));
  };
  return (
    <div>
      <ul className="absolute left-[30%] top-[10%] bg-white-200 w-[55%] mt-2   rounded-lg shadow-lg">
        {searchResults.map((text) => (
          <li
            className="flex items-center justify-content px-5 py-2 border-b-1  border-b-gray-300 bg-white hover:bg-gray-300 z-30 relative cursor-pointer space-x-4"
            key={text}
            onClick={() => handleSearchRender(text)}
          >
            <Search size={20} />
            <span className="ml-1 truncate overflow-hidden whitespace-nowrap">
              {text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionComponent;
