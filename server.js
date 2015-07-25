var fs = require("fs"),
    express = require("express"),
    mustache = require("mustache");

var app = express();

app.get("/", function(req, res) {
    fs.readFile(__dirname + "/index.mustache", function(err, data) {
        var html = mustache.render(data.toString(), {
            name: "Jacob"
        });

        res.end(html);
    });
});

app.listen(8080);
