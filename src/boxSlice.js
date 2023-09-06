import { createSlice } from "@reduxjs/toolkit";

const boxSlice = createSlice({
    name: "counter",
    initialState: {
        Home: [
            {
                id: 0,
                pts: 0,
                reb: 0,
                ast: 0,
                fgm: 0,
                fga: 0,
                ftm: 0,
                fta: 0,
                "3fgm": 0,
                "3fga": 0,
                stl: 0,
                blk: 0,
                to: 0,
                pf: 0,
                oreb: 0,
                dreb: 0,
            },
            {
                id: 1,
                pts: 0,
                reb: 0,
                ast: 0,
                fgm: 0,
                fga: 0,
                ftm: 0,
                fta: 0,
                "3fgm": 0,
                "3fga": 0,
                stl: 0,
                blk: 0,
                to: 0,
                pf: 0,
                oreb: 0,
                dreb: 0,
            },
            {
                id: 2,
                pts: 0,
                reb: 0,
                ast: 0,
                fgm: 0,
                fga: 0,
                ftm: 0,
                fta: 0,
                "3fgm": 0,
                "3fga": 0,
                stl: 0,
                blk: 0,
                to: 0,
                pf: 0,
                oreb: 0,
                dreb: 0,
            },
            {
                id: 3,
                pts: 0,
                reb: 0,
                ast: 0,
                fgm: 0,
                fga: 0,
                ftm: 0,
                fta: 0,
                "3fgm": 0,
                "3fga": 0,
                stl: 0,
                blk: 0,
                to: 0,
                pf: 0,
                oreb: 0,
                dreb: 0,
            },
            {
                id: 4,
                pts: 0,
                reb: 0,
                ast: 0,
                fgm: 0,
                fga: 0,
                ftm: 0,
                fta: 0,
                "3fgm": 0,
                "3fga": 0,
                stl: 0,
                blk: 0,
                to: 0,
                pf: 0,
                oreb: 0,
                dreb: 0,
            },
        ],
        Away: [
            {
                id: 0,
                pts: 0,
                reb: 0,
                ast: 0,
                fgm: 0,
                fga: 0,
                ftm: 0,
                fta: 0,
                "3fgm": 0,
                "3fga": 0,
                stl: 0,
                blk: 0,
                to: 0,
                pf: 0,
                oreb: 0,
                dreb: 0,
            },
            {
                id: 1,
                pts: 0,
                reb: 0,
                ast: 0,
                fgm: 0,
                fga: 0,
                ftm: 0,
                fta: 0,
                "3fgm": 0,
                "3fga": 0,
                stl: 0,
                blk: 0,
                to: 0,
                pf: 0,
                oreb: 0,
                dreb: 0,
            },
            {
                id: 2,
                pts: 0,
                reb: 0,
                ast: 0,
                fgm: 0,
                fga: 0,
                ftm: 0,
                fta: 0,
                "3fgm": 0,
                "3fga": 0,
                stl: 0,
                blk: 0,
                to: 0,
                pf: 0,
                oreb: 0,
                dreb: 0,
            },
            {
                id: 3,
                pts: 0,
                reb: 0,
                ast: 0,
                fgm: 0,
                fga: 0,
                ftm: 0,
                fta: 0,
                "3fgm": 0,
                "3fga": 0,
                stl: 0,
                blk: 0,
                to: 0,
                pf: 0,
                oreb: 0,
                dreb: 0,
            },
            {
                id: 4,
                pts: 0,
                reb: 0,
                ast: 0,
                fgm: 0,
                fga: 0,
                ftm: 0,
                fta: 0,
                "3fgm": 0,
                "3fga": 0,
                stl: 0,
                blk: 0,
                to: 0,
                pf: 0,
                oreb: 0,
                dreb: 0,
            },
        ],
        Totals: {
            Home: {
                pts: 0,
                reb: 0,
                ast: 0,
                fgm: 0,
                fga: 0,
                ftm: 0,
                fta: 0,
                "3fgm": 0,
                "3fga": 0,
                stl: 0,
                blk: 0,
                to: 0,
                pf: 0,
                oreb: 0,
                dreb: 0,
            },
            Away: {
                pts: 0,
                reb: 0,
                ast: 0,
                fgm: 0,
                fga: 0,
                ftm: 0,
                fta: 0,
                "3fgm": 0,
                "3fga": 0,
                stl: 0,
                blk: 0,
                to: 0,
                pf: 0,
                oreb: 0,
                dreb: 0,
            },
        },
    },
    reducers: {
        increment: (state) => void (state["Home"][1].pts += 1),
        decrement: (state) => void (state["Home"][1].pts -= 1),
        newRow: (state, action) => {
            switch (action.payload) {
                case "Home": {
                    state["Home"].push({
                        id: state["Home"].length,
                        pts: 0,
                        reb: 0,
                        ast: 0,
                        fgm: 0,
                        fga: 0,
                        ftm: 0,
                        fta: 0,
                        "3fgm": 0,
                        "3fga": 0,
                        stl: 0,
                        blk: 0,
                        to: 0,
                        pf: 0,
                        oreb: 0,
                        dreb: 0,
                    });
                    return state;
                }
                case "Away": {
                    state["Away"].push({
                        id: state["Away"].length,
                        pts: 0,
                        reb: 0,
                        ast: 0,
                        fgm: 0,
                        fga: 0,
                        ftm: 0,
                        fta: 0,
                        "3fgm": 0,
                        "3fga": 0,
                        stl: 0,
                        blk: 0,
                        to: 0,
                        pf: 0,
                        oreb: 0,
                        dreb: 0,
                    });
                    return state;
                }
                default:
                    return state;
            }
        },
        deleteRow: (state, action) => {
            switch (action.payload) {
                case "Home": {
                    const length = state["Home"].length;

                    for (const stat in state["Home"][length - 1]) {
                        const value = state["Home"][length - 1][stat];

                        if (stat !== "id" && value !== 0) {
                            return state;
                        }
                    }
                    state["Home"].pop();
                    return state;
                }
                case "Away": {
                    const length = state["Away"].length;

                    for (const stat in state["Away"][length - 1]) {
                        const value = state["Away"][length - 1][stat];

                        if (stat !== "id" && value !== 0) {
                            return state;
                        }
                    }
                    state["Away"].pop();
                    return state;
                }
                default:
                    return state;
            }
        },
        handleAction: (state, action) => {
            const team = action.payload.Team;
            const id = action.payload.player_id;
            const stats = action.payload.stats;

            for (const stat in stats) {
                if (action.payload["undo"]) {
                    try {
                        state[team][id][stat] -= stats[stat];
                    } catch (err) {
                    } finally {
                        state["Totals"][team][stat] -= stats[stat];
                    }
                } else {
                    try {
                        state[team][id][stat] += stats[stat];
                    } catch (err) {
                    } finally {
                        state["Totals"][team][stat] += stats[stat];
                    }
                }
            }
            return state;
        },
    },
});

export const { increment, decrement, newRow, deleteRow, handleAction } =
    boxSlice.actions;
export default boxSlice.reducer;
