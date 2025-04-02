import { useEffect } from "react";
import { Youtube_API_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addVideoList, clearVideoList } from "../utils/videoSlice";

const useGetVideoData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getYouTubeVideos();

    return () => dispatch(clearVideoList());
  }, []);

  const getYouTubeVideos = async () => {
    const data = await fetch(Youtube_API_URL);

    const json_data = await data.json();
    console.log(json_data, "-----jsondata");

    const extractobj = json_data?.items?.map((itm) => ({
      id: itm.id,
      title: itm.snippet.title,
      channelTitle: itm.snippet.channelTitle,
      thumbnails: itm.snippet.thumbnails,
      viewCount: itm.statistics.viewCount,
    }));

    console.log(extractobj, "-----extractobj");

    dispatch(addVideoList(extractobj));
  };
};

export default useGetVideoData;
