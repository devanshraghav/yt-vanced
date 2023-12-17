import React from "react";
import { USER_IMAGE } from "../../Utils/constants";

//  nested comments
import { commentData } from "../../Utils/constants";

// display only single comment
const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex gap-5">
      <img className="h-8" src={USER_IMAGE} alt="user-logo" />
      <div className="">
        <h1>{name}</h1>
        <h1>{text}</h1>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment) => {
    return (
      <div className="m-2">
        <Comment data={comment} />
        <div className="border border-l-black pl-5 ml-5">
          <CommentList comments={comment.replies} />
        </div>
      </div>
    );
  });
};

const CommentContainer = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">Comments:</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
