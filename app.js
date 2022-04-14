/* eslint-disable space-infix-ops */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
/* eslint-disable node/no-path-concat */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();

// Middleware / routing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (request, response) {
    return response.render("pages/index.ejs");
});

app.get("/guide", function (request, response) {
    return response.render("pages/guide.ejs");
});

app.post("/results", function (request, response) {
    return response.send(request.body);
    /* response.render("pages/results.ejs"); */
});

// Localhost
app.listen(3000, function () {
    console.log("My server is running on port 3000");
});
