import React from "react";
import { useDispatch } from "react-redux";
import { addToggle } from "../utils/navigationSlice";

const Header = () => {
  const dispatch = useDispatch();

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
        />
        <button className="bg-white-200 border border-l-0 rounded-r-full px-4 py-2 cursor-pointer">
          <img
            className="h-6"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8-KtftpX0mMOPbU-grd33atLK5qRrYsCcS2UACvPxEPw1X_5B90YumuTwd3DW43vNopA&usqp=CAU"
          />
        </button>
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
