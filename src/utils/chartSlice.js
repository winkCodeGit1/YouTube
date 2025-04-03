import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
  name: "chartSlice",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      console.log(action.payload, "-----slice chart");
      state.message.splice(10, 1);
      state.message.unshift(action.payload);
    },
  },
});

export const { addMessage } = chartSlice.actions;
export default chartSlice.reducer;
