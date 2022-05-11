/* eslint-disable comma-dangle */
/* eslint-disable space-infix-ops */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
/* eslint-disable node/no-path-concat */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

const PORT = process.env.PORT || 5000;

require("./models/db");
const express = require("express");
const app = express();
const server = require("http").Server(app);
const ejs = require("ejs");
const MongoClient = require("mongodb").MongoClient;
const path = require("path");
const indexRoute = require("./routes/indexRoute");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views/"));
app.use(express.static("public"));

// Connection URI
const uri =
    "mongodb+srv://test:test@cluster0.uwjpd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Create a new MongoClient
const mongoclient = new MongoClient(uri);

let db = mongoclient.db("");

app.use("/", indexRoute);

app.use(function (req, res, next) {
    req.db = db;
    next();
});

app.use("/results", indexRoute);

// Localhost
app.listen(PORT, function (err) {
    if (err) console.log("Error in server setup");
    console.log("Server listening on Port", PORT);
});
