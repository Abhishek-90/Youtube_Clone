import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE: any = { user: null };

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      return state;
    },

    removeUser: (state) => {
      state.user = null;
      return state;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
