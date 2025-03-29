import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigationSlice",
  initialState: {
    toggleSliceBar: true,
  },
  reducers: {
    addToggle: (state) => {
      state.toggleSliceBar = !state.toggleSliceBar;
    },
    closeMenu: (state) => {
      state.toggleSliceBar = false;
    },
  },
});

export const { addToggle, closeMenu } = navigationSlice.actions;
export default navigationSlice.reducer;
