import React, { useEffect, useState } from "react";

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

  if (commentList.length === 0) return;

  const Comment = ({ data }) => {
    return (
      <div className="flex gap-5">
        <img
          className="h-8 rounded-full"
          src={data.authorProfileImageUrl}
          alt="user-logo"
        />
        <div className="">
          <h1 className="text-sm font-semibold">{data.authorDisplayName}</h1>
          <h1 className="text-sm">{data.textDisplay}</h1>
        </div>
      </div>
    );
  };

  const CommentReplies = ({ replies }) => {
    return replies.map((reply) => <Comment data={reply?.snippet} />);
  };

  const RenderComments = ({ comments }) => {
    return comments.map((comment) => {
      return (
        <div className="m-2">
          <Comment data={comment?.snippet?.topLevelComment?.snippet} />

          {comment.replies ? (
            <div className="border border-l-black pl-5 ml-5">
              <CommentReplies replies={comment?.replies?.comments} />
            </div>
          ) : (
            ""
          )}
        </div>
      );
    });
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Comments:</h1>
      <RenderComments comments={commentList} />
    </div>
  );
};

export default CommentSection;
