var fs = require("fs"),
    express = require("express"),
    mustache = require("mustache");

var app = express();

var engine = require("./engine.js");

app.engine("mustache", engine);

app.set("views", "./views");
app.set("view engine", "mustache");

app.get("/", function(req, res) {
    res.render("index.mustache", {
        people: [
            {
                firstname: "Jacob",
                lastname: "Cons"
            },
            {
                firstname: "Monty",
                lastname: "Anderson"
            }

        ]
    });

});

app.get("/", function(req, res) {
    res.render("sortable.mustache", {
        people: [
            {
                artistname: "Dean Martin",
                popularity: 10
            },
            {
                artistname: "Johhny Cash",
                popularity: 22
            }
        ]
    });

});



app.listen(8080);
