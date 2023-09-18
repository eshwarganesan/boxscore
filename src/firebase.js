// firebase.js
import { initializeApp } from "firebase/app";
import "firebase/auth"; // for authentication
import "firebase/database"; // for the real-time database
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Add more Firebase services as needed (e.g., 'firebase/storage')

const firebaseConfig = {
    apiKey: "AIzaSyAnWiL_iphVrtBFbbivgR9Bxs7PXC_gbJo",
    authDomain: "boxscore-dcbb1.firebaseapp.com",
    projectId: "boxscore-dcbb1",
    storageBucket: "boxscore-dcbb1.appspot.com",
    messagingSenderId: "123393658665",
    appId: "1:123393658665:web:a6952584957bd3088ff138",
    measurementId: "G-Z78K9ERPF0",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const googleAuthProvider = new GoogleAuthProvider();

export { auth, googleAuthProvider };
