import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import VideoCard from "../components/Body/VideoCard";

const Results = () => {
  const getVideos = useSelector((store) => store.videoList.videoLists);
  const menuSelector = useSelector((store) => store.MenuToogler.isMenuOpen);
  return (
    <div
      className={`flex flex-col gap-5 p-3 w-[80%] rounded-xl ${
        menuSelector ? "ml-4" : "ml-12"
      }`}
    >
      {getVideos.map((video) => (
        <Link to={`/watch?v=${video?.id}`} key={video?.id}>
          <VideoCard info={video} type={"search"} />
        </Link>
      ))}
    </div>
  );
};

export default Results;
