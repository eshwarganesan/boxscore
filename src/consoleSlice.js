import { createSlice } from "@reduxjs/toolkit";

const consoleSlice = createSlice({
  name: "console",
  initialState: {
    action: {},
    history: []
  },
  reducers: {
    made2pointer: (state) => {
      state.action = {pts: 2, fgm: 1, fga: 1};
      return state;
    },
    clear: (state) => {
      state.action = {};
      return state;
    },
    addHistory: (state, action) => {
      state.history.push(action.payload);
      return state;
    },
    undo: (state) => {
      state.history.pop();
      return state;
    },
  },
});

export const { made2pointer, clear, addHistory, undo } = consoleSlice.actions;
export default consoleSlice.reducer;