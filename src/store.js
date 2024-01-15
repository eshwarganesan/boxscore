// store.js
import thunk from "redux-thunk";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import session from "redux-persist/es/storage/session.js";
import boxScoreReducer from "./boxSlice.js";
import consoleReducer from "./consoleSlice.js";

const persistConfig = {
    key: "root",
    storage: session,
};

const rootReducer = combineReducers({
    boxScore: boxScoreReducer,
    console: consoleReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
});

export const persistor = persistStore(store);
