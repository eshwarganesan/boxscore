import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { MongoClient } from "mongodb";
import auth from "../src/firebase.js";
import admin from "firebase-admin";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
//const passport = require("passport");
const config = "mongodb://localhost:27017";

const app = express();

const corsOptions = {
    origin: "http://localhost:3000", // Replace with your frontend's URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Enable cookies and authentication headers (if needed)
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const serviceAccount = join(
    __dirname,
    "./firebaseConfig/boxscore-dcbb1-firebase-adminsdk-8a493-936b9ecc64.json"
); // Update with the actual path to your service account key file

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://boxscore-dcbb1-default-rtdb.firebaseio.com", // Update with your Firebase project URL
});

const verifyFirebaseToken = async (req, res, next) => {
    const idToken = req.headers.authorization;
    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        req.user = decodedToken; // Attach user information to the request object
        console.log("Decoded Token:", decodedToken); // Log decoded token for debugging
        next();
    } catch (error) {
        console.error("Error verifying Firebase token:", error);
        res.status(401).json({ error: "Unauthorized" });
    }
};

let db;
MongoClient.connect(config, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((client) => {
        db = client.db("boxscores"); // Assign the database connection to the "db" variable
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    req.db = db; // Attach the database connection to the request object
    console.log("Time:", Date.now(), "Request:", req, "Result:", res);
    next();
});

app.get("/", function (req, res) {
    res.send("hello");
});

app.post("/save-box-score", verifyFirebaseToken, (req, res) => {
    console.log("Saving box score");
    const collection = req.db.collection("boxScores");
    const {boxScore, uid} = req.body;
    try {
        collection.insertOne({ boxScore, uid });
        console.log("Box score saved successfully");
        res.status(200).json({ message: "Box score saved successfully" });
    } catch (err) {
        console.log("Failed to save box score");
        console.log(err);
        res.status(500).json({
            message: "Faled to save box score",
            error: err,
        });
    }
});

app.get("/protected-route", verifyFirebaseToken, (req, res) => {
    // Access the authenticated user information via req.user
    res.json({ message: "This route is protected!", user: req.user });
});

app.get("/box-scores/:userId", verifyFirebaseToken, async (req, res) => {
    try {
        const {userId} = req.params;
        const boxScores = await req.db.collection("boxScores").find({ uid: userId }).toArray();
        res.json(boxScores);
    } catch (error) {
        console.error('Error retrieving box scores:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
