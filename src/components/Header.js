import React, { useEffect, useState } from "react";
import hamburger from "../assests/hamburger icon.png";
import { YOUTUBE_LOGO, USER_IMAGE } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../Utils/Redux/ToogleMenuSlice";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { cacheResults } from "../Utils/Redux/SearchCacheSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestionData, setSearchSuggestionData] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const cache = useSelector((store) => store?.searchCache);
  // To toggle sideMenu
  const dispatch = useDispatch();
  const handleMenuToggle = () => {
    dispatch(toogleMenu());
  };

  useEffect(() => {
    // make an api call after every key press
    // but if the difference between 2 api call is < 200ms
    // then decline the Api call

    const timeout = setTimeout(() => {
      if (cache[searchQuery]) {
        setSearchSuggestionData(cache[searchQuery]);
      } else {
        getSearchSuggestionData();
      }
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchQuery]);

  const getSearchSuggestionData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchQuery
    );
    const jsonData = await data.json();
    setSearchSuggestionData(jsonData[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: jsonData[1],
      })
    );
  };
  return (
    <div className="flex justify-between p-4 items-center top-0 sticky bg-white">
      <div className="flex items-center">
        <img
          src={hamburger}
          alt="icon"
          className="h-8 cursor-pointer"
          onClick={() => handleMenuToggle()}
        />
        <Link to="/">
          <img src={YOUTUBE_LOGO} alt="yt-logo" className="h-6 mx-2" />
        </Link>
      </div>
      <div className="">
        <form
          className="flex"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="search anything"
            className="focus-none rounded-l-3xl border border-gray-400 border-r-0 p-2 w-[40rem]"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            type="submit"
            className="flex rounded-r-3xl items-center border border-gray-400 px-5"
          >
            <BsSearch />
          </button>
        </form>

        {searchSuggestionData.length > 0 && showSuggestions && (
          <div className="fixed bg-white shadow-xl rounded-xl m-1 border border-gray-100 py-2 w-[40rem]">
            <ul className="">
              {searchSuggestionData.map((suggestion, index) => {
                return (
                  <li
                    className="flex items-center gap-3 mt-2 hover:bg-gray-200 px-4 py-1 cursor-default"
                    key={index}
                  >
                    <BsSearch />
                    {suggestion}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="">
        <img src={USER_IMAGE} alt="user-logo" className="h-8" />
      </div>
    </div>
  );
};

export default Header;
