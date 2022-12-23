import { createSlice } from "@reduxjs/toolkit";
import { VideoList } from "../Shared/interfaces";

const INITIAL_STATE: VideoList[] = [];

const videoSlice = createSlice({
  name: "video",
  initialState: INITIAL_STATE,
  reducers: {
    addVideos: (state: VideoList[], actions) => {
      state = [];
      state = state.concat(actions.payload);
      return state;
    },
  },
});

export const { addVideos } = videoSlice.actions;
export default videoSlice.reducer;
