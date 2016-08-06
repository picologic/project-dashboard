var express = require('express');
var projects = require('./projects');
var clients = require('./clients');

var router = express.Router();

router.get('/clients', clients.list);
router.get('/projects', projects.list);

module.exports = router;