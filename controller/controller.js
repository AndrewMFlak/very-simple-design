var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var router = express.Router();
var app = express();

var tourInfo = require("../model/tourModel.js");

router.get("/", function (req, res) {
    // tourInfo.all(function(data) {
    //     console.log(res);
    // })
    res.sendFile(path.join(__dirname, "index.html"));
});

router.get("/operator", function (req, res) {
    res.sendFile(path.join(__dirname, "operator.html"));
});

router.get("/api/tourInfo", function (req, res) {
    tourInfo.all(function(data) {
        console.log("tourInfo");
        console.log(data);
        // res.render("index",{tours:data});
    });
    res.json(tourInfo);
});

router.post("/api/tourInfo", function (req, res) {
    res.json(tourInfo);
});

router.post("/api/clear", function () {
    tourInfo = [];

    console.log(tourInfo);
});

module.exports = router;
