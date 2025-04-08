import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chartSlice";
import {
  getRandomUserName,
  randomComment,
  randomImage,
} from "../utils/extraObj";

const LiveChart = () => {
  const dispatch = useDispatch();
  const message = useSelector((store) => store.chart.message);
  const [LiveMessage, setLiveMessage] = useState([]);

  console.log(message, "----message selector");

  useEffect(() => {
    const time = setTimeout(() => {
      dispatch(
        addMessage({
          userImage: randomImage(),
          userName: getRandomUserName(),
          comment: randomComment(),
        })
      );
    }, 1500);

    return () => clearTimeout(time);
  }, [message]);

  return (
    <div>
      <h2 className="text-xl">Live Chart</h2>
      <div className="flex flex-col">
        <div
          className="w-full border border-gray-400 
         bg-white-200 h-96 mt-4 rounded-lg shadow-lg p-4 overflow-y-scroll no-scrollbar flex-col-reverse"
        >
          {message.map((msg, index) => (
            <ChatMessage key={index} msg={msg} />
          ))}
        </div>
        <form
          className="w-full border p-4 flex space-x-1.5 justify-content items-center"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                userImage:
                  "https://avatars.githubusercontent.com/u/102747618?v=4&size=64",
                userName: "Suman Saurv Das",
                comment: LiveMessage,
              })
            );
          }}
        >
          <input
            className="w-[70%] border p-1"
            type="text"
            value={LiveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button
            className="bg-green-400 text-white px-4 py-1 rounded-lg"
            onClick={() => {}}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChart;
