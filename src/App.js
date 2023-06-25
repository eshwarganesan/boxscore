import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Table(props) {
    const [data, setData] = useState(0);
    const team = props.team;

    const [rows, setRow] = useState([1, 2, 3, 4, 5]);

    const onChangeInput = (e) => {
        const editData = e.target.value;
        console.log(editData);
        setData(editData);
    };
    const addRow = () => {
        rows.push(rows.length + 1);
        console.log(rows);
        const newRows = [...rows];
        setRow(newRows);
    };
    const delRow = () => {
        rows.splice(-1, 1);
        console.log(rows);
        const newRows = [...rows];
        setRow(newRows);
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>PTS</th>
                        <th>REB</th>
                        <th>AST</th>
                        <th>FG</th>
                        <th>FT</th>
                        <th>3PT</th>
                        <th>ST</th>
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
                    {rows.map((rowNumber) => (
                        <tr key={rowNumber}>
                            <td>
                                <input
                                    name="number"
                                    value={data.number}
                                    type="text"
                                    placeholder="Player number"
                                    onChange={(e) => onChangeInput(e)}
                                />
                            </td>
                            <td>
                                <input
                                    name="name"
                                    value={data.name}
                                    type="text"
                                    placeholder="Player name"
                                    onChange={(e) => onChangeInput(e)}
                                />
                            </td>
                        </tr>
                    ))}
                    ;
                </tbody>
            </table>
            <button variant="text" onClick={addRow}>
                Add Row
            </button>
            <button variant="text" onClick={delRow}>
                Delete Row
            </button>
        </div>
    );
}
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <Table name="Home" />
            <Table name="Away" />
        </div>
    );
}

export default App;
