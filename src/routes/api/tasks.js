var util = require('util');
var params = require('./param-helper');
var harvestService = require('../../lib/harvest-service');
var asanaService = require('../../lib/asana-service');
var cache = require('../../lib/cache-service');

module.exports.list = function (req, res) {
    var harvest = new harvestService();
    var asana = new asanaService();

    var queryParams = params(req, true);
    if (!queryParams.project_id) return res.send(401, 'Missing project id');

    // get project name from harvest
    getHarvestProject(queryParams.project_id)
        .then(function(p) {
            var name = util.format("[%s] %s", p.code, p.name);
            return getAsanaProject(name)
                .then(function(ap) {
                    if (!ap) { return res.send(404); }
                    var pid = ap.id;
                    delete queryParams.project_id;

                    return asana.Tasks.list(pid, queryParams)
                        .then(function(response) {
                            return res.json(response);
                        });
                });
        });
    
    function getHarvestProject(project_id) {
        return cache.get('harvest:project:' + project_id,
            function() { return harvest.Projects.get(project_id); });
    }

    function getAsanaProject(name) {
        return cache.get('asana:project:' + name, 
            function() {
                return asana.Projects.list({name: name})
                    .then(function(results) {
                        if (results.length === 0) {
                            return null;
                        }

                        return results[0];
                    });
            });
    }
};