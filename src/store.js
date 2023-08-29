// store.js
import { configureStore } from "@reduxjs/toolkit";
import boxScoreReducer from "./boxSlice";

export default configureStore({
    reducer: {
        boxScore: boxScoreReducer,
    },
});
