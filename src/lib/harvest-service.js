var harvest = require('harvest');
var config = require('config');

var HarvestService = (function() {
    function ctor() {
        // validate config
        var cfg = config.get('harvest');
        if (!cfg.subdomain || cfg.subdomain === '') throw new Error('Subdomain not provided');
        if (!cfg.email || cfg.email === '') throw new Error('Email not provided');
        if (!cfg.password || cfg.password === '') throw new Error('Password not provided');

        this.cfg = cfg;
        this.harvestClient = new harvest(cfg);
    }
    return ctor;
}());

module.exports = HarvestService;