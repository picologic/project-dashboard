var cache = require('memory-cache');
var Promise = require('bluebird');

var CacheService = (function() {
    var self = this;
    self.get = get;

    function get(key, provider) {
        return new Promise(function(resolve) {
            var val = cache.get(key);
            if (val !== null) {
                return resolve(val);
            } else {
                return provider().then(function(result) {
                    cache.put(key, result);
                    return resolve(result);
                });
            }
        });
    }

    return self;
})();

module.exports = CacheService;