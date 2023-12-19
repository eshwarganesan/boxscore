// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import boxScoreReducer from "./boxSlice.js";
import consoleReducer from "./consoleSlice.js";

const rootReducer = combineReducers({
    boxScore: boxScoreReducer,
    console: consoleReducer,
});

export default configureStore({
    reducer: rootReducer,
});
