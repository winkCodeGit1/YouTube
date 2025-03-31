import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/navigationSlice";
import { useDispatch } from "react-redux";
import RecommendedVideos from "./RecommendedVideos";
import CommentSection from "./CommentSection";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col lg:flex-row p-4">
      {/* Video Player Section */}
      <div className="flex-1 flex-col lg:mr-4">
        <iframe
          className="w-full aspect-video"
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

      {/* Recommended Videos Section */}
      <div className="lg:w-1/3 mt-4 lg:mt-0">
        <RecommendedVideos />
      </div>
    </div>
  );
};

export default WatchPage;
