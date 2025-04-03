import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from "./navigationSlice";
import videoSlice from "./videoSlice";
import searchSlice from "./searchSlice";
import chartSlice from "./chartSlice";

const store = configureStore({
  reducer: {
    slidebar: navigationSlice,
    videoSlice: videoSlice,
    searchSlice: searchSlice,
    chart: chartSlice,
  },
});

export default store;
