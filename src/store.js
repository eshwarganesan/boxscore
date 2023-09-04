// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import boxScoreReducer from "./boxSlice";
import consoleReducer from "./consoleSlice";

const rootReducer = combineReducers({
    boxScore: boxScoreReducer,
    console: consoleReducer,
});

export default configureStore({
    reducer: rootReducer,
});
