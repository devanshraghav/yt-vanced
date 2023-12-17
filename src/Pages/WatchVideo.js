import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/Redux/ToogleMenuSlice";
import { useSearchParams } from "react-router-dom";
import VideoFrame from "../components/Videos/VideoFrame";

// Icons
import { USER_IMAGE } from "../Utils/constants";
import Like from "../assests/like.png";
import disLike from "../assests/dislike.png";
import usenumberberFormat from "../Utils/useNumberFormat";
import Description from "../components/Videos/Description";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const [videoInfo, setVideoInfo] = useState([]);

  const SINGLE_VIDEO_URL =
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get(
      "v"
    )}&key=` + process.env.REACT_APP_YOUTUBE_API_KEY;

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

  const { snippet, statistics } = videoInfo[0];
  const { channelTitle, description } = snippet;
  const { commentCount, likeCount, viewCount } = statistics;

  const views = usenumberberFormat(viewCount);
  const likes = usenumberberFormat(likeCount);
  const comments = usenumberberFormat(commentCount);

  return (
    <div>
      <div className="h-[403px] w-[716px] m-4">
        <VideoFrame info={videoInfo} />

        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <img className="w-9" src={USER_IMAGE} alt="channel-logo" />
            <div className="flex flex-col">
              <p className="font-semibold">{channelTitle}</p>
              <p className="text-sm text-gray-500">Subscribers</p>
            </div>
            <div>
              <button className=" p-2 px-3 bg-black text-white rounded-full">
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center bg-gray-100 rounded-full">
              <button className="p-2 hover:bg-gray-300">
                <img src={Like} alt="like" className="h-5" />
              </button>
              {views ? <span className="">{likes}</span> : ""}
              <button className="hover:bg-gray-300 p-2">
                <img src={disLike} alt="dislike" className="h-5" />
              </button>
            </div>
          </div>
        </div>

        <Description description={description} views={views}/>
      </div>
    </div>
  );
};

export default WatchVideo;
