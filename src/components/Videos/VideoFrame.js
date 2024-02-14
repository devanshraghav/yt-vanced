import React from "react";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "../Comment/CommentContainer";


const VideoFrame = ({ info }) => {
  // console.log(info[0]);
  const [searchParams] = useSearchParams();
  const { snippet } = info[0];
  const { title } = snippet;
  return (
    <div>
      <div>
        <iframe
          width="716"
          height="403"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-2xl"
        ></iframe>
      </div>
      <div>
        <h1 className="font-semibold text-lg mt-2">{title}</h1>
      </div>

      {/* <CommentContainer /> */}
    </div>
  );
};

export default VideoFrame;
