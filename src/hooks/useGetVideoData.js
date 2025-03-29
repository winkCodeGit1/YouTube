import { useEffect } from "react";
import { Youtube_API_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addVideoList } from "../utils/videoSlice";

const useGetVideoData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getYouTubeVideos();
  }, []);

  const getYouTubeVideos = async () => {
    const data = await fetch(Youtube_API_URL);

    const json_data = await data.json();
    console.log(json_data, "-----jsondata");
    dispatch(addVideoList(json_data.items));
  };
};

export default useGetVideoData;
