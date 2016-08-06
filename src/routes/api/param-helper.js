var extend = require('util')._extend;
var url = require('url');

module.exports = function(req, clean) {
    var query = url.parse(req.url, true).query;
    var params = extend(query, req.params);
    if (clean) {
        params = cleanParams(params);
    }
    return params;
};

function cleanParams(params) {
    for (var key in params) {
        params[key] = convert(params[key]);
    }
    return params;
}

function convert(value) {
    if (value === 'true' || value === 'false') {
        return value === 'true';
    }

    if (!isNaN(parseFloat(value)) && isFinite(value)) {
        return parseFloat(value);
    }

    return value;
}