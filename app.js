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
const bodyparser = require("body-parser");
const ejs = require("ejs");
const MongoClient = require("mongodb").MongoClient;
const path = require("path");
const indexRoute = require("./routes/indexRoute");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views/"));
app.use(express.static("public"));

/* app.get("/", function (request, response) {
    return response.render("pages/index.ejs");
});

app.get("/guide", function (request, response) {
    return response.render("pages/guide.ejs");
});

app.post("/results", function (request, response) {
    return response.send(request.body);
     response.render("pages/results.ejs");
});

app.post("/results", urlencodedParser, (req, res) => {
    formData(req.body);
    res.render("pages/results.ejs", { name: req.body.name });
});

app.get("/test", (req, res) => {
    database
        .collection("Answers")
        .find({})
        .toArray((error, result) => {
            if (error) throw error;
            res.send(result);
        });
}); */

app.use("/", indexRoute);

// Localhost
app.listen(PORT, function (err) {
    if (err) console.log("Error in server setup");
    console.log("Server listening on Port", PORT);
});
