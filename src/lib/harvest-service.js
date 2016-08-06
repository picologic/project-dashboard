var harvest = require('harvest');
var config = require('config');
var _ = require('underscore');
var bluebird = require('bluebird');

var HarvestService = (function() {
    function ctor() {
        // validate config
        var cfg = config.get('harvest');
        if (!cfg.subdomain || cfg.subdomain === '') throw new Error('Subdomain not provided');
        if (!cfg.email || cfg.email === '') throw new Error('Email not provided');
        if (!cfg.password || cfg.password === '') throw new Error('Password not provided');

        var client = new harvest(cfg);
        this.Projects = resource(client.Projects, 'project');
        this.Clients = resource(client.Clients, 'client');
    }
    return ctor;

    function resource(api, objName) {
        var _api = bluebird.promisifyAll(api); 
        var _objName = objName;
        
        return {
            list: list,
            get: get
        };

        function list(params) {
            return _api.listAsync(params).then(function(results) {
                return _.chain(results)
                        .map(function (x) {
                            return x[_objName];
                        })
                        .where(params)
                        .value();
            });
        }

        function get(id) {
            return _api.getAsync({id: id})
                .then(function(results) {
                    return results[_objName];
                });
        }
    }
}());

module.exports = HarvestService;