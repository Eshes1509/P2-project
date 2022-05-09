/* eslint-disable comma-dangle */
/* eslint-disable space-infix-ops */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
/* eslint-disable node/no-path-concat */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Applicant = mongoose.model("Form");


const app = express();

app.get("/", function (request, response) {
    return response.render("pages/index");

});

function insertData(request, response) {
    let applicant = new Applicant();
    applicant = request.body;
    applicant.save((err, doc) => {
        if(!err) 
            response.redirect('pages/results');
    });
}


app.post("/results", function (request, response) {
     return insertData(request, response);
}); 

app.get("/guide", function (request, response) {
    return response.render("pages/guide.ejs");
});

let database;
app.get("/test", (request, response) => {
    database
        .collection("Answers")
        .find({})
        .toArray((error, result) => {
            if (error) throw error;
            response.send(result);
        });
});

module.exports = app;
