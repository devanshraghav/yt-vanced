import React, { useEffect, useState } from "react";
import { VIDEO_URL } from "../Utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [homepageVideos, setHomePageVideos] = useState([]);

  useEffect(() => {
    handleVideoData();
  }, []);

  const handleVideoData = async () => {
    const videoList = await fetch(VIDEO_URL);
    const videos = await videoList?.json();
    setHomePageVideos(videos?.items);
  };

  if (homepageVideos.length === 0) {
    return;
  }

  return (
    <div className="flex flex-wrap gap-10 p-5 m-4">
      {homepageVideos.map((video) => (
        <Link to={`/watch?v=${video?.id}`} key={video?.id}>
          <VideoCard info={video}  />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
