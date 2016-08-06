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

    function resource (api, objName) {
        var _api = bluebird.promisifyAll(api); 
        var _objName = objName;
        
        return {
            list: list
        };

        function list (params) {
            return _api.listAsync(params).then(function(results) {
                var cleanParams = _cleanParams(params);
                console.log(cleanParams);
                return _.chain(results)
                        .map(function (x) {
                            return x[_objName];
                        })
                        .where(cleanParams)
                        .value();
            });
        }

        function _cleanParams(params) {
            for (var key in params) {
                params[key] = _convert(params[key]);
            }
            return params;
        }

        function _convert(value) {
            if (value === 'true' || value === 'false') {
                return value === 'true';
            }

            if (!isNaN(parseFloat(value)) && isFinite(value)) {
                return parseFloat(value);
            }

            return value;
        }
    }
}());

module.exports = HarvestService;