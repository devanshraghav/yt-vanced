import React from "react";
import { useSearchParams } from "react-router-dom";

const VideoFrame = ({ info }) => {
  const [searchParams] = useSearchParams();
  const { snippet, statistics } = info[0];
  const { title } = snippet;
  const {commentCount, likeCount, viewCount} = statistics;

  return (
    <div>
      <iframe
        width="716"
        height="403"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoFrame;
