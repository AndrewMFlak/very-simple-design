var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3306;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tourInfo = [{
}
];
console.log(tourInfo);

app.post("/api/tourInfo")

module.exports = tourInfo;