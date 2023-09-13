import { createSlice } from "@reduxjs/toolkit";

const boxSlice = createSlice({
    name: "counter",
    initialState: {
        Home: [
            {
                id: 0,
                name: "",
                number: "",
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
                name: "",
                number: "",
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
                name: "",
                number: "",
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
                name: "",
                number: "",
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
                name: "",
                number: "",
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
                name: "",
                number: "",
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
                name: "",
                number: "",
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
                name: "",
                number: "",
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
                name: "",
                number: "",
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
                name: "",
                number: "",
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
                name: "",
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
                name: "",
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
            const team = action.payload;
            const lastPlayer = state[team].length - 1;
            const newPlayerID = state[team][lastPlayer].id + 1;
            state[team].push({
                id: newPlayerID,
                name: "",
                number: "",
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
            console.log(JSON.stringify(state[team], null, 2));
            return state;
        },
        deleteRow: (state, action) => {
            const team = action.payload;
            const length = state[team].length;

            for (const stat in state[team][length - 1]) {
                const value = state[team][length - 1][stat];

                if (
                    stat !== "id" &&
                    stat !== "name" &&
                    stat !== "number" &&
                    value !== 0
                ) {
                    return state;
                }
            }
            state[team].pop();
            return state;
        },
        deletePlayer: (state, action) => {
            const team = action.payload.Team;
            const id = action.payload.player_id;
            const length = state[team].length;

            for (const stat in state[team][length - 1]) {
                const value = state[team][length - 1][stat];

                if (
                    stat !== "id" &&
                    stat !== "name" &&
                    stat !== "number" &&
                    value !== 0
                ) {
                    return state;
                }
            }
            state[team].splice(id, 1);

            return state;
        },
        handleAction: (state, action) => {
            const team = action.payload.Team;
            const id = action.payload.player_id;
            const stats = action.payload.stats;

            for (const stat in stats) {
                if (action.payload["undo"]) {
                    try {
                        const index = state[team].findIndex(player => player.id === id);
                        state[team][index][stat] -= stats[stat];
                    } catch (err) {
                    } finally {
                        state["Totals"][team][stat] -= stats[stat];
                    }
                } else {
                    try {
                        const index = state[team].findIndex(player => player.id === id);
                        state[team][index][stat] += stats[stat];
                    } catch (err) {
                    } finally {
                        state["Totals"][team][stat] += stats[stat];
                    }
                }
            }
            return state;
        },
        setName: (state, action) => {
            const team = action.payload.team;
            const id = action.payload.id;
            const name = action.payload.name;

            if (id !== undefined) {
                const index = state[team].findIndex(player => player.id === id);
                state[team][index]["name"] = name;
            } else {
                state["Totals"][team]["name"] = name;
            }

            return state;
        },
        setNumber: (state, action) => {
            const team = action.payload.team;
            const id = action.payload.id;
            const number = action.payload.number;

            if (id !== undefined) {
                const index = state[team].findIndex(player => player.id === id);
                state[team][index]["number"] = number;
            } else {
                state["Totals"][team]["number"] = number;
            }
            return state;
        },
    },
});

export const {
    increment,
    decrement,
    newRow,
    deleteRow,
    deletePlayer,
    handleAction,
    setName,
    setNumber,
} = boxSlice.actions;
export default boxSlice.reducer;
