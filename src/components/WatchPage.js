import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/navigationSlice";
import { useDispatch } from "react-redux";
import RecommendedVideos from "./RecommendedVideos";
import CommentSection from "./CommentSection";
import LiveChart from "./LiveChart";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col lg:flex-row px-7 py-5">
      <div className="flex-3/4 flex-col lg:mr-4 w-[60%]">
        <iframe
          className="w-4/4 aspect-video"
          src={`https://www.youtube.com/embed/${searchParams.get(
            "v"
          )}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <CommentSection />
      </div>

      <div className="flex flex-col lg:flex-col lg:ml-4 mt-4 lg:mt-0 w-[40%]">
        <div className="lg:w-[100%] mt-4 lg:mt-0 h-3/4">
          <LiveChart />
        </div>
        <div className="lg:w-1/3 mt-4 lg:mt-0">
          <RecommendedVideos />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
