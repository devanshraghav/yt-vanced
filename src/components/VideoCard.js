import React from "react";
import { USER_IMAGE } from "../Utils/constants";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-80 cursor-pointer flex flex-col gap-3">
      <img
        src={thumbnails?.medium?.url}
        alt=""
        className={`rounded-xl h-${thumbnails?.medium?.height} w-${thumbnails?.medium?.width}`}
      />
      <div className="flex gap-2">
        <img src={USER_IMAGE} alt="profile" className="h-8" />
        <div className="flex flex-col">
          <h1 className="font-semibold text-md">{title}</h1>
          <h1 className="font-semibold text-md">{channelTitle}</h1>
          <h1 className="font-semibold text-md">{statistics?.viewCount}</h1>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
