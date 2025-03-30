import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToggle } from "../utils/navigationSlice";
import { Search } from "lucide-react";
import { addCache } from "../utils/searchSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [showSearchResults, setShowSearchResults] = React.useState(false);

  const cache = useSelector((store) => store.searchSlice);
  ///Debouncing mechanism
  useEffect(() => {
    console.log(cache[searchText], "-----cache");

    //caching mechanism
    const suggest = setTimeout(() => {
      if (cache[searchText]) {
        setSearchResults(cache[searchText]);
      } else {
        getSuggestionResult();
      }
    }, 200);

    return () => clearTimeout(suggest);
  }, [searchText]);

  const getSuggestionResult = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json_data = await data.json();
    console.log(json_data[1], "-----jsondata suggeston");
    setSearchResults(json_data[1]);

    //update cache
    dispatch(addCache({ [searchText]: json_data[1] }));
  };

  const handleToggleSideBar = () => {
    dispatch(addToggle());
  };
  return (
    <div className="grid grid-flow-col shadow-lg p-2">
      <div className="col-span-1 flex px-4">
        <div className="align-middle pt-6">
          <img
            className="h-6 center-content cursor-pointer"
            alt="hamburger"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
            onClick={handleToggleSideBar}
          />
        </div>

        <a href="/">
          <img
            className="h-17 cursor-pointer"
            alt="youTube"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          />
        </a>
      </div>
      <div className="col-span-10 flex justify-center items-center">
        <input
          className="w-3/4 rounded-l-full border px-4 py-2 bg-white-100"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setShowSearchResults(true)}
          onBlur={() => setShowSearchResults(false)}
        />
        {searchText && (
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => setSearchText("")}
          >
            ✕
          </button>
        )}
        <button className="bg-white-200 border border-l-0 rounded-r-full px-4 py-2 cursor-pointer">
          <img
            className="h-6"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8-KtftpX0mMOPbU-grd33atLK5qRrYsCcS2UACvPxEPw1X_5B90YumuTwd3DW43vNopA&usqp=CAU"
          />
        </button>
        {showSearchResults && (
          <ul className="absolute top-[8%] bg-white-200 w-[60%] mt-2 border border-gray-300 rounded-lg shadow-lg">
            {searchResults.map((text) => (
              <li
                className="flex items-center justify-content px-5 py-2 border border-b-gray-300 border  bg-white hover:bg-gray-300 z-30 relative cursor-pointer space-x-4"
                key={text}
              >
                <Search size={20} />
                <span className="ml-1">{text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <img
          className="h-7"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
