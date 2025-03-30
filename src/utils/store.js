import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from "./navigationSlice";
import videoSlice from "./videoSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    slidebar: navigationSlice,
    videoSlice: videoSlice,
    searchSlice: searchSlice,
  },
});

export default store;
