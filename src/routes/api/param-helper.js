var extend = require('util')._extend;
var url = require('url');

module.exports = function(req) {
    var query = url.parse(req.url, true).query;
    var params = extend(query, req.params);
    return params;
}