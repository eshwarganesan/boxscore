// Console.js
import React from "react";
import { useDispatch } from "react-redux";
import { made2pointer } from "./consoleSlice";

const Console = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(made2pointer())}>2PT made</button>
        </div>
    );
};

export default Console;