import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import { MongoClient } from 'mongodb';
import auth from '../src/firebase.js'
//const passport = require("passport");
const config = 'mongodb://localhost:27017'

const app = express();


const corsOptions = {
    origin: "http://localhost:3000", // Replace with your frontend's URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Enable cookies and authentication headers (if needed)
};

let db;
MongoClient
    .connect(config, { useNewUrlParser: true, useUnifiedTopology: true })
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

app.post("/save-box-score", (req, res) => {
    console.log("Saving box score");
    const collection = req.db.collection("boxScores");
    const boxScoreData = req.body;
    try {
        collection.insertOne(boxScoreData);
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

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
