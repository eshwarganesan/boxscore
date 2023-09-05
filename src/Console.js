// Console.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { made2pointer, undo } from "./consoleSlice";
import { handleAction } from "./boxSlice";

const Console = () => {
    const dispatch = useDispatch();
    const history = useSelector((state) => state.console.history);
    const lastAction = history.slice(-1)[0];
    const handleUndo = () => {
        console.log(JSON.stringify(lastAction));
        if (lastAction !== undefined) {
            dispatch(handleAction(lastAction));
            dispatch(undo());
        }
    };

    return (
        <div>
            <button onClick={() => dispatch(made2pointer())}>2PT made</button>
            <button onClick={() => handleUndo()}>Undo</button>
        </div>
    );
};

export default Console;
