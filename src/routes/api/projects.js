var url = require('url');
var harvestService = require('../../lib/harvest-service');

module.exports.list = function (req, res) {
    var svc = new harvestService();
    var query = url.parse(req.url, true).query;
    svc.Projects.list(query)
        .then(function (results) {
            res.json(results);
        });
};