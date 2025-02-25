import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { cacheResults } from "../../Utils/Redux/SearchCacheSlice";

const SearchBar = ({ openSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestionData, setSearchSuggestionData] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const cache = useSelector((store) => store?.searchCache);
  const dispatch = useDispatch();

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
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchQuery
    );
    const jsonData = await data?.json();
    setSearchSuggestionData(jsonData[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: jsonData[1],
      })
    );
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(`/results?search_query=${suggestion}`);
  };

  return (
    <div className={openSearch ? "relative" : "hidden lg:block"}>
      <form
        className="flex"
        onSubmit={(e) => {
          e.preventDefault();
          if (searchQuery !== "") {
            navigate(`/results?search_query=${searchQuery}`);
          }
        }}
      >
        <input
          type="text"
          placeholder="search anything"
          className="focus-none rounded-l-3xl border border-gray-400 border-r-0 p-2 w-[75vw] lg:w-[40rem]"
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
          <ul>
            {searchSuggestionData.map((suggestion, index) => {
              return (
                <li
                  className="flex items-center gap-3 mt-2 hover:bg-gray-200 px-4 py-1 cursor-default"
                  key={index}
                  onMouseDown={() => handleSuggestionClick(suggestion)}
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
  );
};

export default SearchBar;
