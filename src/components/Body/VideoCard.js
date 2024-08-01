import React from "react";
import { USER_IMAGE } from "../../Utils/constants";

const VideoCard = ({ info, relatedVideo }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div
      className={
        relatedVideo
          ? "w-full cursor-pointer flex gap-3"
          : "md:w-80 w-full cursor-pointer flex flex-col gap-3"
      }
    >
      <img
        src={thumbnails?.medium?.url}
        alt=""
        // className={`rounded-xl h-${thumbnails?.medium?.height} w-${thumbnails?.medium?.width}`}
        className={
          relatedVideo
            ? "rounded-xl w-40 h-24"
            : `md:rounded-xl h-${thumbnails?.medium?.height} w-${thumbnails?.medium?.width}`
        }
      />
      <div className="flex gap-2">
        {relatedVideo ? (
          ""
        ) : (
          <img src={USER_IMAGE} alt="profile" className="h-8" />
        )}
        <div className="flex flex-col gap-1">
          <h1
            className={
              relatedVideo ? "font-bold text-xs" : "font-semibold text-md"
            }
          >
            {title}
          </h1>
          <div className="">
            <h1
              className={
                relatedVideo ? "font-semibold text-xs" : "font-semibold text-md"
              }
            >
              {channelTitle}
            </h1>
            <h1
              className={
                relatedVideo ? "font-semibold text-xs" : "font-semibold text-md"
              }
            >
              {statistics?.viewCount}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
