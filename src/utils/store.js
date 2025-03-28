import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from "./navigationSlice";

const store = configureStore({
  reducer: {
    slidebar: navigationSlice,
  },
});

export default store;
