/* eslint-disable space-before-function-paren */
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
const { MongoClient } = require("mongodb");
let mongo = require("mongodb");
const assert = require("assert");
const bodyParser = require("body-parser");
const res = require("express/lib/response");

router.use(bodyParser.json());

router.use(bodyParser.urlencoded({ extended: true }));

// Connection URI
const uri =
    "mongodb+srv://test:test@cluster0.uwjpd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Create a new MongoClient
/* const client = new MongoClient(uri);

async function run() {
    try {
        // Connect the client to the server
        await client.connect();

        // Establish and verify connection
        await client.db("admin").command({ ping: 1 });
        console.log("Connected successfully to server/database.");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir); */

const client = new MongoClient(uri);

router.get("/", function (request, response) {
    return response.render("pages/index");
});

router.post("/result", function (request, response) {
    return insertData(request, response);
});

router.post("/results", function (request, response, next) {
    let item = request.body;

    client.connect(function (err) {
        const db = client.db("myFirstDatabase");
        assert.equal(null, err);
        db.collection("Answers").insertOne(item, function (err, result) {
            assert.equal(null, err);
            console.log("Item inserted");
            client.close();
        });
    });

    response.render("pages/results");
});

router.get("/guide", function (request, response) {
    return response.render("pages/guide.ejs");
});

/* let database;
app.get("/test", (request, response) => {
    database
        .collection("Answers")
        .find({})
        .toArray((error, result) => {
            if (error) throw error;
            response.send(result);
        });
}); */

module.exports = router;
