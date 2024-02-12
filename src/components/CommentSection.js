import React, { useEffect, useState } from "react";
import { USER_IMAGE } from "../Utils/constants";

const CommentSection = ({ videoId }) => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const fetcheddata = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=` +
        process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const jsonData = await fetcheddata?.json();
    const comments = jsonData?.items;
    setCommentList(comments);
  };

  console.log("commentList: ", commentList);

  const Comment = ({data}) =>{
    return (
      <div className="flex gap-5">
      <img className="h-8" src={USER_IMAGE} alt="user-logo" />
      <div className="">
        <h1>{data.authorDisplayName}</h1>
        <h1>{data.textDisplay}</h1>
      </div>
    </div>
    )
  }

  const CommentReplies = ({replies}) =>{
    <Comment data = {replies?.commenets?.snippet}/>
  }

  const RenderComments = ({comments}) =>{
    return comments.map((comment) => {
      return (
        <div className="m-2">
          <Comment data={comment?.snippet?.topLevelComment?.snippet} />
          <div className="border border-l-black pl-5 ml-5">
            <CommentReplies replies={comment.replies} />
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Comments:</h1>
      <RenderComments commenets = {commentList} />
    </div>
  )
};

export default CommentSection;
