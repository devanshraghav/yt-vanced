import React from "react";
import { useDispatch } from "react-redux";
import { addVideos } from "../../Utils/Redux/VideoListSlice";

const Button = (props) => {
  const {category,active,setActiveCategory} = props;
  const {categoryName,categoryId} = category;
  const dispatch = useDispatch();

  const handler = () =>{
    setActiveCategory(categoryId);

    fetchData()
  }

  const fetchData = async () =>{

    try{
      const videoList = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&videoCategoryId=${categoryId}&maxResults=30&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
      if (!videoList.ok) {
        throw new Error(`HTTP error! Status: ${videoList.status}`);
      }
      const videos = await videoList?.json();

      if (videos.error) {
        throw new Error(`YouTube API error: ${videos.error.message}`);
      }

      const fetchedVideos = videos.items;

      dispatch(addVideos(fetchedVideos));
    }
    catch (error){
      console.log("Error in fetching videos : ", error.message);
    }

    
  }

  return (
    <div>
      <button className={active===categoryId? "bg-black px-3 py-1 m-4 rounded-md text-white" : "bg-gray-200 px-3 py-1 m-4 rounded-md"} onClick={handler}>
        {categoryName}
      </button>
    </div>
  );
};

export default Button;
