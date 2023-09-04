import { createSlice } from "@reduxjs/toolkit";

const consoleSlice = createSlice({
  name: "console",
  initialState: {},
  reducers: {
    made2pointer: (state) => {
      state = {pts: 2, fgm: 1, fga: 1};
      return state;
    },
    clear: (state) => {
      state = {};
      return state;
    }
  },
});

export const { made2pointer, clear } = consoleSlice.actions;
export default consoleSlice.reducer;