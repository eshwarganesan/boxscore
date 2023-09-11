import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSVLink } from "react-csv";
import Console from "./Console";
import {
    newRow,
    deleteRow,
    deletePlayer,
    handleAction,
    setName,
    setNumber,
} from "./boxSlice";
import { clear, addHistory } from "./consoleSlice";

function TextInput(props) {
    const [data, setData] = useState(0);
    const consoleActions = useSelector((state) => state.console.action);
    const Team = props.team;
    const player_id = props.player_id;
    const dispatch = useDispatch();

    const onChangeInput = (e) => {
        if (Object.keys(consoleActions).length === 0) {
            const editData = e.target.value;
            dispatch(setName({ name: editData, team: Team, id: player_id }));
            setData(editData);
        } else {
            return;
        }
    };

    return (
        <input
            name="name"
            value={data.name}
            type="text"
            placeholder={props.placeholder}
            onChange={(e) => onChangeInput(e)}
            disabled={Object.keys(consoleActions).length > 0}
            class="name"
        />
    );
}

function NumericInput(props) {
    const [data, setData] = useState(0);
    const consoleActions = useSelector((state) => state.console.action);
    const Team = props.team;
    const player_id = props.player_id;
    const dispatch = useDispatch();

    const onChangeInput = (e) => {
        if (Object.keys(consoleActions).length === 0) {
            const value = e.target.value;
            const sanitizedValue = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
            dispatch(
                setNumber({ number: sanitizedValue, team: Team, id: player_id })
            );
            setData(sanitizedValue);
        } else {
            return;
        }
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
            disabled={Object.keys(consoleActions).length > 0}
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
        //dispatch(deleteRow(team));
        dispatch(deletePlayer({Team: team, player_id: 2}));
    };
    const handleClick = (id) => {
        if (Object.keys(consoleActions).length > 0) {
            const consoleData = {
                stats: consoleActions,
                Team: team,
                player_id: id,
            };
            dispatch(addHistory({ ...consoleData, undo: true }));
            dispatch(clear());
            dispatch(handleAction({ ...consoleData, undo: false }));
        }
    };

    return (
        <div>
            <table>
                <thead>
                    <tr id="Totals" onClick={() => handleClick()}>
                        <td colspan="20">
                            <TextInput placeholder="Team Name" team={team} />
                        </td>
                    </tr>
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
                                <NumericInput
                                    team={team}
                                    player_id={player.id}
                                />
                            </td>
                            <td>
                                <TextInput
                                    placeholder="Player Name"
                                    colspan="1"
                                    team={team}
                                    player_id={player.id}
                                />
                            </td>
                            <td>{player["pts"]}</td>
                            <td>{player["reb"]}</td>
                            <td>{player["ast"]}</td>
                            <td>{player["fgm"]}</td>
                            <td>{player["fga"]}</td>
                            <td>{player["ftm"]}</td>
                            <td>{player["fta"]}</td>
                            <td>{player["3fgm"]}</td>
                            <td>{player["3fga"]}</td>
                            <td>{player["stl"]}</td>
                            <td>{player["blk"]}</td>
                            <td>{player["to"]}</td>
                            <td>{player["pf"]}</td>
                            <td>{player["oreb"]}</td>
                            <td>{player["dreb"]}</td>
                            <td>
                                {player["fga"] === 0
                                    ? 0
                                    : (
                                          (player["fgm"] /
                                              player["fga"]) *
                                          100
                                      ).toFixed(2)}
                            </td>
                            <td>
                                {player["fta"] === 0
                                    ? 0
                                    : (
                                          (player["ftm"] /
                                              player["fta"]) *
                                          100
                                      ).toFixed(2)}
                            </td>
                            <td>
                                {player["3fga"] === 0
                                    ? 0
                                    : (
                                          (player["3fgm"] /
                                              player["3fga"]) *
                                          100
                                      ).toFixed(2)}
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colspan="2" class="number">
                            Totals
                        </td>
                        <td>{box["Totals"][team]["pts"]}</td>
                        <td>{box["Totals"][team]["reb"]}</td>
                        <td>{box["Totals"][team]["ast"]}</td>
                        <td>{box["Totals"][team]["fgm"]}</td>
                        <td>{box["Totals"][team]["fga"]}</td>
                        <td>{box["Totals"][team]["ftm"]}</td>
                        <td>{box["Totals"][team]["fta"]}</td>
                        <td>{box["Totals"][team]["3fgm"]}</td>
                        <td>{box["Totals"][team]["3fga"]}</td>
                        <td>{box["Totals"][team]["stl"]}</td>
                        <td>{box["Totals"][team]["blk"]}</td>
                        <td>{box["Totals"][team]["to"]}</td>
                        <td>{box["Totals"][team]["pf"]}</td>
                        <td>{box["Totals"][team]["oreb"]}</td>
                        <td>{box["Totals"][team]["dreb"]}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <button
                className="btn btn-primary btn-dark btn-sm shadow-none"
                onClick={addPlayer}
            >
                Add Player
            </button>
            <button
                className="btn btn-primary btn-dark btn-sm shadow-none"
                onClick={delPlayer}
            >
                Delete Player
            </button>
        </div>
    );
}

function App() {
    const headers = [
        { label: "No.", key: "number" },
        { label: "Player", key: "name" },
        { label: "PTS", key: "pts" },
        { label: "REB", key: "reb" },
        { label: "AST", key: "ast" },
        { label: "FGM", key: "fgm" },
        { label: "FGA", key: "fga" },
        { label: "3FGM", key: "3fgm" },
        { label: "3FGA", key: "3fga" },
        { label: "FTM", key: "ftm" },
        { label: "FTA", key: "fta" },
        { label: "STL", key: "stl" },
        { label: "BLK", key: "blk" },
        { label: "TO", key: "to" },
        { label: "PF", key: "pf" },
        { label: "OREB", key: "oreb" },
        { label: "DREB", key: "dreb" },
    ];

    const data = useSelector((state) => state.boxScore);

    return (
        <div>
            <Table team="Home" />
            <Table team="Away" />
            <Console />
            <button className="btn btn-primary btn-dark btn-sm shadow-none">
                <CSVLink
                    data={data["Home"]}
                    headers={headers}
                    filename={data["Totals"]["Home"]["name"]}
                >
                    CSV download for home team
                </CSVLink>
            </button>
            <button className="btn btn-primary btn-dark btn-sm shadow-none">
                <CSVLink
                    data={data["Away"]}
                    headers={headers}
                    filename={data["Totals"]["Away"]["name"]}
                >
                    CSV download for away team
                </CSVLink>
            </button>
        </div>
    );
}

export default App;
