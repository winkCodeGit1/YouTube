import React from "react";

const ChatMessage = ({ msg }) => {
  const { userImage, userName, comment } = msg;

  return (
    <div className="flex items-start space-x-3 py-2 shadow-lg px-4">
      <img
        className="rounded-full w-10 h-10 object-cover"
        alt={userName}
        src={userImage}
      />
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-800">{userName}</span>
        <span className="text-sm text-gray-600">{comment}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
