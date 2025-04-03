import React, { useState } from "react";
import { commentData } from "../utils/commentData";

// This is a recursive method of doing a component

const CommentSectHead = ({ commentData }) => {
  const [showReplies, setShowReplies] = useState(false);
  return (
    <>
      <div className="flex flex-row space-x-1.5 items-center ">
        <img
          className="w-10 h-10 rounded-full object-cover "
          alt={commentData.username}
          src={commentData.userImage}
        />
        <div className="flex flex-col bg-gray-100 px-4 py-2 rounded-lg mt-2 w-3/4">
          <span className="text-lg font-bold">{commentData.username}</span>
          <span className="text-sm ">{commentData.comment}</span>
        </div>
      </div>

      {commentData.replies.length > 0 && (
        <button
          className="text-blue-500 text-sm ml-12 mt-2"
          onClick={() => setShowReplies(!showReplies)}
        >
          {showReplies
            ? "Hide Replies"
            : `Show Replies (${commentData.replies.length})`}
        </button>
      )}

      {showReplies && (
        <div className="flex flex-col ml-10  border-l-2 border-gray-300 pl-4">
          {commentData?.replies.map((reply, index) => (
            <CommentSectHead key={index} commentData={reply} />
          ))}
        </div>
      )}
    </>
  );
};

const CommentSection = () => {
  return (
    <>
      <h2 className="text-xl ">Comments:</h2>
      <div className="w-[100%] flex flex-col mt-4  px-2 ">
        {commentData.map((commentDataList, index) => (
          <CommentSectHead key={index} commentData={commentDataList} />
        ))}
      </div>
    </>
  );
};

export default CommentSection;
