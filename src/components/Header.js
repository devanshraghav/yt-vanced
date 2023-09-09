import React from "react";
import hamburger from "../assests/hamburger icon.png";
import { YOUTUBE_LOGO, USER_IMAGE } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../Utils/Redux/ToogleMenuSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleMenuToggle = () => {
    dispatch(toogleMenu());
  };
  return (
    <div className="flex justify-between shadow-md p-4 items-center">
      <div className="flex items-center">
        <img
          src={hamburger}
          alt="icon"
          className="h-8 cursor-pointer"
          onClick={() => handleMenuToggle()}
        />
        <img src={YOUTUBE_LOGO} alt="yt-logo" className="h-6 mx-2" />
      </div>
      <div className="">
        <form onSubmit={(e)=>{
          e.preventDefault();
          console.log(e);
        }}>
          <input
            type="text"
            placeholder="search anything"
            className="focus-none rounded-l-3xl border border-gray-400 border-r-0 p-2 w-96"
          />
          <button type="submit" className="rounded-r-3xl border border-gray-400 p-2">
            Search
          </button>
        </form>
      </div>
      <div className="">
        <img src={USER_IMAGE} alt="user-logo" className="h-8" />
      </div>
    </div>
  );
};

export default Header;
