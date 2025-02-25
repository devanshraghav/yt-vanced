import React from "react";
import { USER_IMAGE } from "../../Utils/constants";

// const VideoCard = ({ info, relatedVideo }) => {
const VideoCard = ({ info, type }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div
      className={
        type === "related"
          ? "w-full cursor-pointer flex gap-3"
          : type === "search"
          ? "w-full cursor-pointer flex gap-3"
          : "md:w-80 w-full cursor-pointer flex flex-col gap-3"
      }
    >
      <img
        src={thumbnails?.medium?.url}
        alt=""
        // className={`rounded-xl h-${thumbnails?.medium?.height} w-${thumbnails?.medium?.width}`}
        className={
          type === "related"
            ? "rounded-xl w-40 h-24"
            : type === "search"
            ? `md:rounded-xl h-${thumbnails?.medium?.height} w-${thumbnails?.medium?.width}`
            : `md:rounded-xl h-${thumbnails?.medium?.height} w-${thumbnails?.medium?.width}`
        }
      />
      <div className="flex gap-2">
        {(type === "related" || type === 'search') ? (
          ""
        ) : (
          <img src={USER_IMAGE} alt="profile" className="h-8" />
        )}
        <div className="flex flex-col gap-1">
          <h1
            className={
              type === "related"
                ? "font-bold text-xs"
                : type === "search"
                ? "font-semibold text-md"
                : "font-semibold text-md"
            }
          >
            {title}
          </h1>
          <div className="">
            <h1
              className={
                type === "related"
                  ? "font-semibold text-xs"
                  : type === "search"
                  ? "font-semibold text-md flex items-center gap-2"
                  : "font-semibold text-md"
              }
            >
              {type === 'search' && <img src={USER_IMAGE} alt="profile" className="h-5" />}
              {channelTitle}
            </h1>
            <h1
              className={
                type === "related"
                  ? "font-semibold text-xs"
                  : type === "search"
                  ? "font-semibold text-md"
                  : "font-semibold text-md"
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
