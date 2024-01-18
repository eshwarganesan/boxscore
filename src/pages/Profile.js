import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setBoxScore } from "../boxSlice.js";
import axios from "axios";
import firebase from "../firebase.js";

function Profile() {
    const [boxScores, setBoxScores] = useState([]);
    const [token, setToken] = useState(null);
    const uid = firebase.auth.currentUser.uid;
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchBoxScores = async () => {
            try {
                firebase.auth.currentUser.getIdToken().then((token) => {
                    setToken(token);
                });
                const response = await axios.get(
                    `http://localhost:3001/box-scores/${uid}`,
                    {
                        headers: { Authorization: token },
                    }
                );
                setBoxScores(response.data);
            } catch (error) {
                console.error("Error fetching box scores:", error);
            }
        };

        fetchBoxScores();
    }, [uid, token]);

    const loadScore = (id) => {
      console.log(boxScores[id]);
      dispatch(setBoxScore(boxScores[id].boxScore))
    };
    return (
        <div>
            <ul>
                {boxScores.map((boxScore, index) => (
                    <li key={index} onClick={() => loadScore(index)}>
                        <Link to="/">
                            {boxScore.boxScore.Totals.Home.name} vs{" "}
                            {boxScore.boxScore.Totals.Away.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Profile;
