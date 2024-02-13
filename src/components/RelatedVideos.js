import React, {useEffect} from "react";
import { VIDEO_URL } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../Utils/Redux/VideoListSlice";
import { Link } from "react-router-dom";
import VideoCard from "./Body/VideoCard";

const RelatedVideos = () => {
    const getVideos = useSelector((store) => store.videoList.videoLists)
    const dispatch = useDispatch();

    useEffect(()=>{
        fetchYoutubeVideos();
    },[]);

    const fetchYoutubeVideos = async() =>{
        const fetechedData = await fetch(VIDEO_URL);
        const jsonData = await fetechedData.json();
        dispatch(addVideos(jsonData?.items));
    }

    // Early Return
  if (getVideos.length === 0) {
    return;
  }

  // Return JSX - video cards...
  
  return (
    <div className="flex flex-col gap-5 p-3 m-4 bg-gray-200 overflow-hidden w-2/6 rounded-xl">
      {getVideos.map((video) => (
        <Link to={`/watch?v=${video?.id}`} key={video?.id}>
          <VideoCard info={video} relatedVideo={true} />
        </Link>
      ))}
    </div>
  );
}

export default RelatedVideos