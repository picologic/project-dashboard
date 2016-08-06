var params = require('./param-helper');
var harvestService = require('../../lib/harvest-service');

module.exports.list = function (req, res) {
    var svc = new harvestService();
    svc.Projects.list(params(req, true))
        .then(function (results) {
            res.json(results);
        });
};

module.exports.get = function (req, res) {
    var svc = new harvestService();
    svc.Projects.get(req.params.project_id)
        .then(function (results) {
            res.json(results);
        });
};