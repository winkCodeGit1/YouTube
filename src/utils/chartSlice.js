import { createSlice } from "@reduxjs/toolkit";
import { videos_offset } from "./constants";

const chartSlice = createSlice({
  name: "chartSlice",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      console.log(action.payload, "-----slice chart");
      state.message.splice(videos_offset, 1);
      state.message.unshift(action.payload);
    },
  },
});

export const { addMessage } = chartSlice.actions;
export default chartSlice.reducer;
