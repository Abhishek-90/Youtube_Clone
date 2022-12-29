import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import VideoListSlice from "./VideoListSlice";

const store = configureStore({
  reducer: {
    videos: VideoListSlice,
    user: UserSlice,
  },
  middleware: () =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
