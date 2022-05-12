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

app.use("/", indexRoute);

app.use("/results", indexRoute);

// Localhost
app.listen(PORT, function (err) {
    if (err) console.log("Error in server setup");
    console.log("Server listening on Port", PORT);
});
