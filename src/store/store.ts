import { configureStore } from "@reduxjs/toolkit";
import VideoListSlice from "./VideoListSlice";

const store = configureStore({
  reducer: {
    videos: VideoListSlice,
  },
});

export default store;
