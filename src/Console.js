// Console.js
import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./boxSlice";

const Console = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
    );
};

export default Console;