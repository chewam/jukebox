function Utils() {
    console.log('---> Create Utils');
}

Utils.prototype.getRemoteFileContent = function(config, callback, scope) {
    var http = require('http'),
        req, me = this, tmp = [];

    req = http.request(config, function(res) {
        res.setEncoding('utf8');
        res.on('data', tmp.push.bind(tmp));

        res.on('end', function () {
            callback.call(scope, tmp.join(''));
        });
    });

    req.on('error', function(error) {
        console.log('--> ' + 'request error' + ':', error);
    });

    req.end();
};

module.exports = new Utils();
