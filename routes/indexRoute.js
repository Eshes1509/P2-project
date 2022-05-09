const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Applicant = mongoose.model('Form');

const app = express();

app.get("/", function (request, response) {
    return response.render("pages/index");
});

module.exports = app;