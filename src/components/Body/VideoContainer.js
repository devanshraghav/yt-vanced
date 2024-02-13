import React, { useEffect, useState } from "react";
import { VIDEO_URL } from "../../Utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../../Utils/Redux/ToogleMenuSlice";
import { GetVideos, addVideos } from "../../Utils/Redux/VideoListSlice";

const VideoContainer = () => {
  const getVideos = useSelector((store) => store.videoList.videoLists)
  const dispatch = useDispatch();

  // To fetch data in homepage... 

  const handleVideoData = async () => {
    const videoList = await fetch(VIDEO_URL);
    const videos = await videoList?.json();
    dispatch(addVideos(videos?.items));
  };

  useEffect(() => {
    handleVideoData();

    handleMenuToggle();
  }, []);

  // To open side menu whenever home page opens...

  const handleMenuToggle = () => {
    dispatch(openMenu());
  };

  

  // Early Return
  if (getVideos.length === 0) {
    return;
  }

  // Return JSX - video cards...
  
  return (
    <div className="flex flex-wrap gap-10 p-5 m-4">
      {getVideos.map((video) => (
        <Link to={`/watch?v=${video?.id}`} key={video?.id}>
          <VideoCard info={video} relatedVideo={false} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
