// middleware/sessionStorageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const sessionStorageSlice = createSlice({
  name: 'sessionStorage',
  initialState: null,
  reducers: {
    saveToSessionStorage: (state, action) => {
      sessionStorage.setItem('reduxState', JSON.stringify(action.payload));
      return action.payload;
    },
  },
});

export const { saveToSessionStorage } = sessionStorageSlice.actions;
export default sessionStorageSlice.reducer;
