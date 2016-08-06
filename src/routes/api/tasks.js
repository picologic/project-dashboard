var util = require('util');
var params = require('./param-helper');
var harvestService = require('../../lib/harvest-service');
var asanaService = require('../../lib/asana-service');

module.exports.list = function (req, res) {
    var harvest = new harvestService();
    var asana = new asanaService();

    var queryParams = params(req, true);
    if (!queryParams.project_id) return res.send(401, 'Missing project id');

    // get project name from harvest
    harvest.Projects.get(queryParams.project_id)
        .then(function(p) {
            var name = util.format("[%s] %s", p.code, p.name);
            return asana.Projects.list({name: name})
                .then(function(results) {
                    if (results.length === 0) {
                        return res.json(404, []);
                    }

                    var pid = results[0].id;
                    delete queryParams.project_id;
                    return asana.Tasks.list(pid, queryParams)
                        .then(function(response) {
                            return res.json(response);
                        });
                });
        });
    
};