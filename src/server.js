var express = require('express');
var api = require('./routes/api');

var port = process.env.PORT || 3000;
var app = express();

// set environment
process.env.ENV = 'development';

app.use('/api/', api);

app.listen(port, function () {
    console.log('Listening on port ' + port);
});