import React, { useState } from "react";
import Modal from "react-modal";
import firebase from "../firebase.js";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";

Modal.setAppElement("#root"); // Set the modal's root element

function Login({ isOpen, onClose }) {
    const [error, setError] = useState(null);

    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(firebase.auth, firebase.googleAuthProvider);
            firebase.auth.currentUser.getIdToken().then((token) => {
                console.log(token);
            });
            onClose(); // Close the modal upon successful sign-in
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Google Sign-In Modal"
        >
            <h2>Sign In with Google</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button onClick={handleGoogleSignIn}>Sign In with Google</button>
            <button onClick={onClose}>Close</button>
        </Modal>
    );
}

export default Login;
