// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Scoreboard from "./Scoreboard";
import Login from "./Login";
import firebase from "firebase/compat/app";
import "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "./Profile";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userSignedIn, setUserSignedIn] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSignOut = async () => {
        await auth.signOut();
    };

    useEffect(() => {
        // Update the userSignedIn state based on the authentication status
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUserSignedIn(true);
            } else {
                setUserSignedIn(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <Router>
            <div className="Header">
                {userSignedIn ? (
                    <div>
                        <Link className="btn btn-primary" to="/profile">Profile</Link>
                        <button onClick={handleSignOut}>Sign Out</button>
                    </div>
                ) : (
                    <div>
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
