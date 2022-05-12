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
const Applicant = mongoose.model("Applicants");


const app = express();

app.get("/", function (request, response) {
    return response.render("pages/index");

});

function insertData(request, response) {
    let applicant = new Applicant();
    applicant.firstName = request.body.firstName;
    applicant.lastName = request.body.lastName;
    applicant.gender = request.body.gender;
    applicant.email = request.body.email;
    applicant.age = request.body.age;
    applicant.major = request.body.major;
    applicant.semester = request.body.semester;
    applicant.roommmateLanguege = request.body.roommateLanguage;
    applicant.planVisitorsRoommate = request.body.planVisitorsRoommate;
    applicant.planVisitors = request.body.planVisitors;
    applicant.preferStudy = request.body.preferStudy;
    applicant.bedtime = request.body.bedtime;
    applicant.roommateGender = request.body.roommateGender;
    applicant.preferInternational = request.body.preferInternational;
    applicant.preferedAgeRange = request.body.preferedAgeRange;
    applicant.btnradio4 = request.body.btnradio4;
    applicant.roommateMajor = request.body.roommateMajor;
    applicant.roommateSemester = request.body.roommateSemester;
    applicant.budget = request.body.budget;
    applicant.btnradio7 = request.body.btnradio7;
    applicant.aalborgSection = request.body.aalborgSection;



    applicant.save((err, doc) => {
        if(!err) 
            response.redirect('pages/results');
    });
}


app.post("/results", function (request, response) {
     insertData(request, response);
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
