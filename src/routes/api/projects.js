var params = require('./param-helper');
var harvestService = require('../../lib/harvest-service');

module.exports.list = function (req, res) {
    var svc = new harvestService();
    svc.Projects.list(params(req))
        .then(function (results) {
            res.json(results);
        });
};