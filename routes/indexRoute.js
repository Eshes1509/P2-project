const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Applicant = mongoose.model('Form');

const app = express();

app.get("/", function (request, response) {
    return response.render("pages/index");
});

app.post("/results", function (request, response) {
    return response.send(request.body);
     response.render("pages/results.ejs");
}); 

app.get("/guide", function (request, response) {
    return response.render("pages/guide.ejs");
});

app.get("/test", (req, res) => {
    database
        .collection("Answers")
        .find({})
        .toArray((error, result) => {
            if (error) throw error;
            res.send(result);
        });
});


module.exports = app;