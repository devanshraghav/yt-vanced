import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/Redux/ToogleMenuSlice";
import { api_key } from "../Utils/constants";
import { useParams } from "react-router-dom";

const WatchVideo = () => {
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  const SINGLE_VIDEO_URL =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=" +
    api_key;

  return (
    <div className="border-4 border-black h-[403px] w-[716px] m-4">
      <iframe
        width="716"
        height="403"
        src="https://www.youtube.com/embed/CMmd-Ha_utw"
        title="Nonstop Lofi - Most Relaxing Radha Krishna Song | Sleeping Peace Song | 30 Minutes With Sri Krishna"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchVideo;
