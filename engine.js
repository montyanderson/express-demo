var fs = require("fs"),
    mustache = require("mustache");

module.exports = function(filePath, options, callback) {
    fs.readFile(filePath, function(err, data) {
        if (err) return callback(new Error(err));

        var html = mustache.render(data.toString(), options);
        return callback(null, html);
    });
};
