var express = require('express');

var port = process.env.PORT || 3000;
var app = express();

app.get('/', function (req, res) {
    res.send(200, "foo");
});

app.listen(port, function () {
    console.log('Listening on port ' + port);
});