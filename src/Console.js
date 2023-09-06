// Console.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
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
    undo,
} from "./consoleSlice";
import { handleAction } from "./boxSlice";

const Console = () => {
    const dispatch = useDispatch();
    const history = useSelector((state) => state.console.history);
    const lastAction = history.slice(-1)[0];
    const handleUndo = () => {
        if (lastAction !== undefined) {
            dispatch(handleAction(lastAction));
            dispatch(undo());
        }
    };

    return (
        <div>
            <button onClick={() => dispatch(made2pointer())}>2PT made</button>
            <button onClick={() => dispatch(missed2pointer())}>
                2PT missed
            </button>
            <button onClick={() => dispatch(made3pointer())}>3PT made</button>
            <button onClick={() => dispatch(missed3pointer())}>
                3PT missed
            </button>
            <button onClick={() => dispatch(madeFreeThrow())}>FT made</button>
            <button onClick={() => dispatch(missedFreeThrow())}>
                FT missed
            </button>
            <button onClick={() => dispatch(defRebound())}>Def. Rebound</button>
            <button onClick={() => dispatch(offRebound())}>Off. Rebound</button>
            <button onClick={() => dispatch(assist())}>Assist</button>
            <button onClick={() => dispatch(steal())}>Steal</button>
            <button onClick={() => dispatch(block())}>Block</button>
            <button onClick={() => dispatch(turnover())}>Turnover</button>
            <button onClick={() => dispatch(foul())}>Foul</button>
            <button onClick={() => dispatch(clear())}>Clear</button>
            <button onClick={() => handleUndo()}>Undo</button>
        </div>
    );
};

export default Console;
