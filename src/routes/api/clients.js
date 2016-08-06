var harvestService = require('../../lib/harvest-service');

module.exports.list = function (req, res) {
    var svc = new harvestService();
    res.json([]);
};