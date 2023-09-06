import { createSlice } from "@reduxjs/toolkit";

const consoleSlice = createSlice({
    name: "console",
    initialState: {
        action: {},
        history: [],
    },
    reducers: {
        made2pointer: (state) => {
            state.action = { pts: 2, fgm: 1, fga: 1 };
            return state;
        },
        missed2pointer: (state) => {
            state.action = { fga: 1 };
            return state;
        },
        madeFreeThrow: (state) => {
            state.action = { pts: 1, ftm: 1, fta: 1 };
            return state;
        },
        missedFreeThrow: (state) => {
            state.action = { fta: 1 };
            return state;
        },
        made3pointer: (state) => {
            state.action = { pts: 3, "3fgm": 1, "3fga": 1 };
            return state;
        },
        missed3pointer: (state) => {
            state.action = { "3fga": 1 };
            return state;
        },
        defRebound: (state) => {
            state.action = { reb: 1, dreb: 1 };
            return state;
        },
        offRebound: (state) => {
            state.action = { reb: 1, oreb: 1 };
            return state;
        },
        assist: (state) => {
            state.action = { ast: 1 };
            return state;
        },
        steal: (state) => {
            state.action = { stl: 1 };
            return state;
        },
        block: (state) => {
            state.action = { blk: 1 };
            return state;
        },
        turnover: (state) => {
            state.action = { to: 1 };
            return state;
        },
        foul: (state) => {
            state.action = { pf: 1 };
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

export const {
    made2pointer,
    missed2pointer,
    madeFreeThrow,
    missedFreeThrow,
    made3pointer,
    missed3pointer,
    defRebound,
    offRebound,
    assist,
    steal,
    block,
    turnover,
    foul,
    clear,
    addHistory,
    undo,
} = consoleSlice.actions;
export default consoleSlice.reducer;
