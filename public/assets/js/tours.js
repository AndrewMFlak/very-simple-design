var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3306;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tourInfo = [{
    name: "test",
    desc: "test description",
    img: "https://pbs.twimg.com/profile_images/575317158688768000/BWZD2Spg_400x400.png"
}
];
console.log(tourInfo);

app.post("/api/tourInfo")

module.exports = tourInfo;