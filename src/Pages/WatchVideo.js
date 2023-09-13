import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/Redux/ToogleMenuSlice";
import { api_key } from "../Utils/constants";
import { useSearchParams } from "react-router-dom";
import VideoFrame from "./VideoFrame";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const [videoInfo, setVideoInfo] = useState([]);

  const SINGLE_VIDEO_URL =
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get(
      "v"
    )}&key=` + api_key;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideo();
  }, []);

  const getVideo = async () => {
    const videoData = await fetch(SINGLE_VIDEO_URL);
    const jsonData = await videoData.json();
    setVideoInfo(jsonData?.items);
  };

  // Early return
  if (videoInfo.length === 0) {
    return;
  }

  return (
    <div className="h-[403px] w-[716px] m-4">
      <VideoFrame info={videoInfo} />
    </div>
  );
};

export default WatchVideo;
