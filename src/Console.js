// Console.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Plus, Dash } from "react-bootstrap-icons";
import { Button } from 'react-bootstrap';
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
            <div>
                <button className="btn btn-primary" onClick={() => dispatch(made2pointer())}>
                    2PT made
                </button>
                <button className="btn btn-primary" onClick={() => dispatch(missed2pointer())}>
                    2PT missed
                </button>
                <button className="btn btn-primary" onClick={() => dispatch(made3pointer())}>
                    3PT made
                </button>
                <button className="btn btn-primary" onClick={() => dispatch(missed3pointer())}>
                    3PT missed
                </button>
                <button className="btn btn-primary" onClick={() => dispatch(madeFreeThrow())}>
                    FT made
                </button>
                <button className="btn btn-primary" onClick={() => dispatch(missedFreeThrow())}>
                    FT missed
                </button>
                <button className="btn btn-primary" onClick={() => dispatch(defRebound())}>
                    Def. Rebound
                </button>
                <button className="btn btn-primary" onClick={() => dispatch(offRebound())}>
                    Off. Rebound
                </button>
                <button className="btn btn-primary" onClick={() => dispatch(assist())}>Assist</button>
                <button className="btn btn-primary" onClick={() => dispatch(steal())}>Steal</button>
                <button className="btn btn-primary" onClick={() => dispatch(block())}>Block</button>
                <button className="btn btn-primary" onClick={() => dispatch(turnover())}>Turnover</button>
                <button className="btn btn-primary" onClick={() => dispatch(foul())}>Foul</button>
                <button className="btn btn-primary" onClick={() => dispatch(clear())}>Clear</button>
                <button className="btn btn-primary" onClick={() => handleUndo()}>Undo</button>
            </div>
            <div>
                <h3>Home</h3>
                <Button 
                    variant="dark"
                    onClick={() =>
                        dispatch(
                            handleAction({ stats: { pts: 1 }, Team: "Home" })
                        )
                    }
                >
                    <Plus></Plus>
                </Button>
                <Button
                    variant="dark"
                    onClick={() =>
                        dispatch(
                            handleAction({ stats: { pts: -1 }, Team: "Home" })
                        )
                    }
                >
                    <Dash></Dash>
                </Button>
                <h3>Away</h3>
                <Button 
                    variant="dark"
                    onClick={() =>
                        dispatch(
                            handleAction({ stats: { pts: 1 }, Team: "Away" })
                        )
                    }
                >
                  <Plus></Plus>
                </Button>
                <Button
                    variant="dark"
                    onClick={() =>
                        dispatch(
                            handleAction({ stats: { pts: -1 }, Team: "Away" })
                        )
                    }
                >
                    <Dash></Dash>
                </Button>
            </div>
        </div>
    );
};

export default Console;
