var express = require("express"),
    mustache = require("mustache");

var app = express();

app.get("/", function(req, res) {
    res.end("Hello, World!");
});

app.listen(8080);
