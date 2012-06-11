var config = require('../config');

exports.checkSession = function(req, res, next) {
    if (req.session.login) {
        next();
    } else {
        res.redirect('/login');
    }
};

exports.logout = function(req, res) {
    console.log('logout', req.session.login);

    if (req.session) {
        delete req.session;
    }
    res.redirect('/login');
};

exports.login = function(req, res) {
    var data = req.query,
        Queue = require('../utils/queue');

    console.log('login', data.login, req.session.login);

    if (req.session.login) {
        res.redirect('/player');
    } else if (data.login) {
        new Queue(data.login);
        req.session.lat = data.lat;
        req.session.lng = data.lng;
        req.session.login = data.login;
        res.redirect('/player');
    } else {
        res.render('login', { title: 'Login' });
    }
};

exports.index = function(req, res) {
    res.render('index', { title: 'Player' });
};

exports.channel = function(req, res) {
    res.render('channel', {
        layout: false,
        title: 'Channel'
    });
};

exports.player = function(req, res) {
    res.render('player', {
        layout: false,
        title: 'Player',
        host: config.host
    });
};

exports.search = function(req, res) {
    res.json({success: true});
};

exports.track = function(req, res) {
    var Utils = require('../utils'),
        id = req.params.id,
        config = {
            host: 'api.deezer.com',
            port: 80,
            path: '/2.0/track/' + id,
            method: 'GET'
        };

    console.log('---> track: http://' + config.host + config.path);

    Utils.getRemoteFileContent(config, function(data) {
        res.json(JSON.parse(data));
    }, this);
};

exports.album = function(req, res) {
    var Utils = require('../utils'),
        id = req.params.id,
        config = {
            host: 'api.deezer.com',
            port: 80,
            path: '/2.0/album/' + id,
            method: 'GET'
        };

    console.log('---> album: http://' + config.host + config.path);

    Utils.getRemoteFileContent(config, function(data) {
        res.json(JSON.parse(data));
    }, this);
};

exports.artist = function(req, res) {
    var Utils = require('../utils'),
        id = req.params.id,
        config = {
            host: 'api.deezer.com',
            port: 80,
            path: '/2.0/artist/' + id,
            method: 'GET'
        };

    console.log('---> artist: http://' + config.host + config.path);

    Utils.getRemoteFileContent(config, function(data) {
        res.json(JSON.parse(data));
    }, this);
};

exports.albums = function(req, res) {
    var Utils = require('../utils'),
        id = req.params.id,
        config = {
            host: 'api.deezer.com',
            port: 80,
            path: '/2.0/artist/' + id + '/albums',
            method: 'GET'
        };

    console.log('---> albums: http://' + config.host + config.path);

    Utils.getRemoteFileContent(config, function(data) {
        res.json(JSON.parse(data));
    }, this);
};

exports.search = function(req, res) {
    var Utils = require('../utils'),
        q = req.query,
        query = q.query,
        type = q.type === 'track' ? '' : q.type,
        id = req.params.id,
        config = {
            host: 'api.deezer.com',
            port: 80,
            path: '/2.0/search/' + type + '?q=' + query,
            method: 'GET'
        };

    console.log('---> search: http://' + config.host + config.path);

    Utils.getRemoteFileContent(config, function(data) {
        res.json(JSON.parse(data));
    }, this);
};

exports.queue = function(req, res) {
    var session, queue,
        sessionId = null,
        id = req.params.id,
        source = req.params.source,
        emitter = req.query.emitter,
        Events = require('../utils/events'),
        QueueMgr = require('../utils/queueMgr'),
        sessions = Events.store.sessions;
    console.log('---> queue: ' + id);

    var callback = function(session) {
        if (session) {
            queue = QueueMgr.get(session.login);
            queue.set(id, {title: 'toto'});
            Events.emit(source, 'queue', {id: id, emitter: emitter});
            res.json({success: true});
        } else {
            res.json({success: false});
        }
    };

    for (var key in sessions) {
        session = JSON.parse(sessions[key]);
        if (session.login === source) {
            sessionId = key;
            Events.getSession(sessionId, callback);
        }
    }

    if (!sessionId) {
        res.json({success: false});
    }
    
};

exports.sources = function(req, res) {
    var session, data = [];
        Events = require('../utils/events'),
        sessions = Events.store.sessions;

    console.log('---> sources: ');

    for (var key in sessions) {
        session = JSON.parse(sessions[key]);
        if (session.lat && session.lng && session.login) {
            data.push({
                lat: session.lat,
                lng: session.lng,
                id: session.login
            });
        }
    }

    res.json({success: true, data: data});
};
