import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videoSlice",
  initialState: {
    videoList: null,
  },
  reducers: {
    addVideoList: (state, action) => {
      state.videoList = action.payload;
    },
    clearVideoList: (state) => {
      state.videoList = null;
    },
  },
});

export const { addVideoList, clearVideoList } = videoSlice.actions;
export default videoSlice.reducer;
