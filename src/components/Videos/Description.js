import React, { useState } from "react";

const Description = (props) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { description, views } = props;
  console.log(description, views);
  return (
    <div>
      <div className="bg-gray-200 rounded-lg pt-4 px-4 mt-5">
        <h1>{views} views</h1>
        <p className="whitespace-pre-line">
          {showFullDescription ? description : description.substring(0, 70)}
        </p>
        <span
          className="cursor-pointer inline-block my-3"
          onClick={() => {
            setShowFullDescription(!showFullDescription);
          }}
        >
          {showFullDescription ? "Show Less" : "Read More"}
        </span>
      </div>
    </div>
  );
};

export default Description;
