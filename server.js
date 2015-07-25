var fs = require("fs"),
    express = require("express"),
    mustache = require("mustache");

var app = express();

app.engine("mustache", function(filePath, options, callback) {
    fs.readFile(filePath, function(err, data) {
        if (err) return callback(new Error(err));

        var html = mustache.render(data.toString(), options);
        return callback(null, html);
    })
});

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
