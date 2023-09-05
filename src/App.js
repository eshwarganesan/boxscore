import "./App.css";
import { useState } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store";
import Console from "./Console";
import { newRow, deleteRow, handleAction } from "./boxSlice";
import { clear, addHistory } from "./consoleSlice";

function TextInput() {
    const [data, setData] = useState(0);

    const onChangeInput = (e) => {
        const editData = e.target.value;
        setData(editData);
    };

    return (
        <input
            name="name"
            value={data.name}
            type="text"
            placeholder="Player name"
            onChange={(e) => onChangeInput(e)}
            class="name"
        />
    );
}

function NumericInput() {
    const [data, setData] = useState(0);

    const onChangeInput = (e) => {
        const value = e.target.value;
        const sanitizedValue = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
        setData(sanitizedValue);
    };

    const handleKeyPress = (e) => {
        const numericKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const allowedKeys = ["Backspace", "Delete", ...numericKeys];

        if (!allowedKeys.includes(e.key)) {
            e.preventDefault();
        }
    };

    return (
        <input
            name="number"
            value={data.number}
            type="text"
            maxLength={3}
            placeholder="#"
            onChange={(e) => onChangeInput(e)}
            onKeyDown={(e) => handleKeyPress(e)}
            class="number"
        />
    );
}

function Table(props) {
    const dispatch = useDispatch();
    const team = props.team;
    const box = useSelector((state) => state.boxScore);
    const consoleActions = useSelector((state) => state.console.action);

    const addPlayer = () => {
        dispatch(newRow(team));
    };
    const delPlayer = () => {
        dispatch(deleteRow(team));
    };
    const handleClick = (id) => {
        if (Object.keys(consoleActions).length > 0) {
            const consoleData = {stats: consoleActions, Team: team, player_id: id, undo: false};
            dispatch(addHistory({stats: consoleActions, Team: team, player_id: id, undo: true}))
            dispatch(clear());
            dispatch(handleAction(consoleData));
        }
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>PTS</th>
                        <th>REB</th>
                        <th>AST</th>
                        <th>FGM</th>
                        <th>FGA</th>
                        <th>FTM</th>
                        <th>FTA</th>
                        <th>3FGM</th>
                        <th>3FGA</th>
                        <th>STL</th>
                        <th>BLK</th>
                        <th>TO</th>
                        <th>PF</th>
                        <th>OREB</th>
                        <th>DREB</th>
                        <th>FG%</th>
                        <th>FT%</th>
                        <th>3PT%</th>
                    </tr>
                </thead>
                <tbody id={team}>
                    {box[team].map((player) => (
                        <tr
                            key={player.id}
                            onClick={() => handleClick(player.id)}
                        >
                            <td>
                                <NumericInput />
                            </td>
                            <td>
                                <TextInput />
                            </td>
                            <td>{box[team][player.id]["pts"]}</td>
                            <td>{box[team][player.id]["reb"]}</td>
                            <td>{box[team][player.id]["ast"]}</td>
                            <td>{box[team][player.id]["fgm"]}</td>
                            <td>{box[team][player.id]["fga"]}</td>
                            <td>{box[team][player.id]["ftm"]}</td>
                            <td>{box[team][player.id]["fta"]}</td>
                            <td>{box[team][player.id]["3fgm"]}</td>
                            <td>{box[team][player.id]["3fga"]}</td>
                            <td>{box[team][player.id]["stl"]}</td>
                            <td>{box[team][player.id]["blk"]}</td>
                            <td>{box[team][player.id]["to"]}</td>
                            <td>{box[team][player.id]["pf"]}</td>
                            <td>{box[team][player.id]["oreb"]}</td>
                            <td>{box[team][player.id]["dreb"]}</td>
                            <td>
                                {box[team][player.id]["fga"] === 0
                                    ? 0
                                    : (box[team][player.id]["fgm"] /
                                          box[team][player.id]["fga"]) *
                                      100}
                            </td>
                            <td>
                                {box[team][player.id]["fta"] === 0
                                    ? 0
                                    : (box[team][player.id]["ftm"] /
                                          box[team][player.id]["fta"]) *
                                      100}
                            </td>
                            <td>
                                {box[team][player.id]["3fga"] === 0
                                    ? 0
                                    : (box[team][player.id]["3fgm"] /
                                          box[team][player.id]["3fga"]) *
                                      100}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button variant="text" onClick={addPlayer}>
                Add Player
            </button>
            <button variant="text" onClick={delPlayer}>
                Delete Player
            </button>
        </div>
    );
}

function App() {
    return (
        <Provider store={store}>
            <Table team="Home" />
            <Table team="Away" />
            <Console />
        </Provider>
    );
}

export default App;
