import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from "./navigationSlice";
import videoSlice from "./videoSlice";

const store = configureStore({
  reducer: {
    slidebar: navigationSlice,
    videoSlice: videoSlice,
  },
});

export default store;
