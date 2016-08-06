var express = require('express');
var projects = require('./projects');
var clients = require('./clients');
var tasks = require('./tasks');

var router = express.Router();

router.get('/clients', clients.list);
router.get('/clients/:client_id', clients.get);
router.get('/clients/:client_id/projects', projects.list);
router.get('/clients/:client_id/projects/:project_id', projects.get);
router.get('/clients/:client_id/projects/:project_id/tasks', tasks.list);
router.get('/projects', projects.list);
router.get('/projects/:project_id', projects.get);
router.get('/projects/:project_id/tasks', tasks.list);

module.exports = router;