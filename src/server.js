var express = require('express');
var api = require('./routes/api');

var port = process.env.PORT || 3000;
var app = express();

// set environment
process.env.ENV = 'development';

app.use('/api/', api);
app.use('/', express.static(__dirname + '/public'));
app.use('/node_modules', express.static('node_modules'));

app.listen(port, function () {
    console.log('Listening on port ' + port);
});