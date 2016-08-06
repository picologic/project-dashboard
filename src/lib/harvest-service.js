var harvest = require('harvest');

var HarvestService = (function() {
    function ctor(config) {
        // validate config
        if (!config.subdomain || config.subdomain === '') throw new Error('Subdomain not provided');
        if (!config.email || config.email === '') throw new Error('Email not provided');
        if (!config.password || config.password === '') throw new Error('Password not provided');

        this.config = config;
        this.harvestClient = new harvest(config);
    }
    return ctor;
}());

module.exports = HarvestService;