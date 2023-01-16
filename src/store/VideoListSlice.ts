import { createSlice } from "@reduxjs/toolkit";
import { IVideoData } from "../Shared/interfaces";

const INITIAL_STATE: IVideoData[] = [];

const videoSlice = createSlice({
  name: "video",
  initialState: INITIAL_STATE,
  reducers: {
    addVideos: (state: IVideoData[], actions) => {
      state = [];
      state = state.concat(actions.payload);
      return state;
    },
  },
});

export const { addVideos } = videoSlice.actions;
export default videoSlice.reducer;
