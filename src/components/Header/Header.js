import React, { useState } from "react";
import hamburger from "../../assests/hamburger icon.png";
import { YOUTUBE_LOGO, USER_IMAGE } from "../../Utils/constants";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../../Utils/Redux/ToogleMenuSlice";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

import { BsSearch } from "react-icons/bs";
import { MdHomeFilled, MdLiveTv } from "react-icons/md";

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [tabs, setTabs] = useState([
    {
      id: 1,
      icon: <MdHomeFilled />,
      name: "Home",
    },
    {
      id: 2,
      icon: <BsSearch />,
      name: "Search",
    },
    {
      id: 3,
      icon: <MdLiveTv />,
      name: "Live",
    },
  ]);

  // To toggle sideMenu
  const dispatch = useDispatch();
  const handleMenuToggle = () => {
    dispatch(toogleMenu());
  };

  return (
    <>
      <nav className="flex justify-between p-4 items-center top-0 sticky bg-white">
        <div className="flex items-center">
          <img
            src={hamburger}
            alt="icon"
            className="h-8 cursor-pointer hidden lg:block"
            onClick={() => handleMenuToggle()}
          />
          <Link to="/">
            <img
              src={YOUTUBE_LOGO}
              alt="yt-logo"
              className={openSearch ? "hidden lg:block h-6 mx-2" : "h-6 mx-2"}
            />
          </Link>
        </div>
        <SearchBar openSearch={openSearch} />
        <div className="">
          <img
            src={USER_IMAGE}
            alt="user-logo"
            className={openSearch ? "hidden lg:block h-8" : "h-8"}
          />
        </div>
      </nav>

      {/* Tabs */}
      <div className="lg:hidden bottom-0 fixed w-full shadow-lg p-3 border z-10 text-gray-500 bg-white">
        <div className="flex justify-around items-center">
          <Link to="/">
            <div
              className="flex items-center flex-col text-xl"
              onClick={() => setOpenSearch(false)}
            >
              {tabs[0].icon}
              <h2 className="text-lg">{tabs[0].name}</h2>
            </div>
          </Link>
          <Link to="#">
            <div
              className="flex items-center flex-col text-xl"
              onClick={() => setOpenSearch(true)}
            >
              {tabs[1].icon}
              <h2 className="text-lg">{tabs[1].name}</h2>
            </div>
          </Link>
          <Link>
            <div
              className="flex items-center flex-col text-xl"
              onClick={() => setOpenSearch(false)}
            >
              {tabs[2].icon}
              <h2 className="text-lg">{tabs[2].name}</h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
