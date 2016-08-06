var params = require('./param-helper');
var harvestService = require('../../lib/harvest-service');

module.exports.list = function (req, res) {
    var svc = new harvestService();
    svc.Clients.list(params(req, true))
        .then(function (results) {
            res.json(results);
        });
};

module.exports.get = function (req, res) {
    var svc = new harvestService();
    svc.Clients.get(req.params.client_id)
        .then(function (results) {
            res.json(results);
        });
};