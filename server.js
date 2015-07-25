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

app.listen(8080);
