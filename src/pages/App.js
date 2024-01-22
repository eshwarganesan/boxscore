// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Scoreboard from "./Scoreboard.js";
import Login from "./Login.js";
import "firebase/auth";
import firebase from "../firebase.js";
import { useEffect } from "react";
import ProtectedRoute from "./ProtectedRoute.js";
import Profile from "./Profile.js";
import { useSelector, useDispatch } from "react-redux";
import { newBoxScore } from "../boxSlice.js";
import axios from "axios";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userSignedIn, setUserSignedIn] = useState(false);
    const [token, setToken] = useState(null);
    const boxScore = useSelector((state) => state.boxScore);
    const dispatch = useDispatch();

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSignOut = async () => {
        await firebase.auth.signOut();
    };

    const handleSave = () => {
        if (userSignedIn) {
            const uid = firebase.auth.currentUser.uid;
            axios
                .post(
                    "http://localhost:3001/save-box-score",
                    {
                        boxScore: boxScore,
                        uid: uid,
                    },
                    {
                        headers: { Authorization: token },
                    }
                )
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    };

    const testRoute = () => {
        console.log(token);
        axios
            .get("http://localhost:3001/protected-route", {
                headers: { Authorization: token },
            })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    const newGame = () => {
        dispatch(newBoxScore());
    };

    useEffect(() => {
        // Update the userSignedIn state based on the authentication status
        const unsubscribe = firebase.auth.onAuthStateChanged((user) => {
            if (user) {
                setUserSignedIn(true);
                firebase.auth.currentUser.getIdToken().then((token) => {
                    setToken(token);
                });
            } else {
                setUserSignedIn(false);
                setToken(null);
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        let timeoutId;
        const sessionTimeoutDuration = 60 * 60 * 1000;

        const handleLogout = () => {
            firebase.auth.signOut();
        };

        const handleSessionTimeout = () => {
            console.log("Session timed out. Logging out...");
            handleLogout();
        };

        const resetSessionTimeout = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(
                handleSessionTimeout,
                sessionTimeoutDuration
            );
        };

        const handleUserActivity = () => {
            resetSessionTimeout();
        };

        if (userSignedIn) {
            timeoutId = setTimeout(
                handleSessionTimeout,
                sessionTimeoutDuration
            );

            // Attach event listeners for user activity
            window.addEventListener("mousemove", handleUserActivity);
            window.addEventListener("keydown", handleUserActivity);
        }

        return () => {
            clearTimeout(timeoutId);

            // Remove event listeners when the component unmounts
            window.removeEventListener("mousemove", handleUserActivity);
            window.removeEventListener("keydown", handleUserActivity);
        };
    }, [userSignedIn]);

    return (
        <Router>
            <div className="Header">
                {userSignedIn ? (
                    <div>
                        <Link to="/">
                            <button onClick={newGame}>New Game</button>
                        </Link>
                        <button onClick={handleSave}>Save box score</button>
                        <button onClick={testRoute}>Refresh token</button>
                        <Link className="btn btn-primary" to="/profile">
                            Profile
                        </Link>
                        <button onClick={handleSignOut}>Sign Out</button>
                    </div>
                ) : (
                    <div>
                        <button onClick={newGame}>New Game</button>
                        <button onClick={handleOpenModal}>Sign In</button>
                    </div>
                )}
            </div>

            <Routes>
                <Route path="/" element={<Scoreboard />} />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute signedIn={userSignedIn} redirect="/">
                            <Profile />
                        </ProtectedRoute>
                    }
                />
            </Routes>

            <Login isOpen={isModalOpen} onClose={handleCloseModal} />
        </Router>
    );
}

export default App;
