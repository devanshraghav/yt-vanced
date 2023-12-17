import React, { useEffect, useState } from "react";
import { VIDEO_URL } from "../../Utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMenu } from "../../Utils/Redux/ToogleMenuSlice";

const VideoContainer = () => {
  const [homepageVideos, setHomePageVideos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    handleVideoData();

    handleMenuToggle();
  }, []);

  // To open side menu whenever home page opens...

  const handleMenuToggle = () => {
    dispatch(openMenu());
  };

  // To fetch data in homepage... 

  const handleVideoData = async () => {
    const videoList = await fetch(VIDEO_URL);
    const videos = await videoList?.json();
    setHomePageVideos(videos?.items);
  };

  // Early Return 

  if (homepageVideos.length === 0) {
    return;
  }

  // Return JSX - video cards...
  
  return (
    <div className="flex flex-wrap gap-10 p-5 m-4">
      {homepageVideos.map((video) => (
        <Link to={`/watch?v=${video?.id}`} key={video?.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
