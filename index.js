var express = require('express'),
    routes = require('./routes'),
    events = require('./utils/events');

var sessionStore = new express.session.MemoryStore();

var app = module.exports = express.createServer();

events.init(app, sessionStore);

// Configuration

app.configure(function() {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.session({secret: 'jukebox', store: sessionStore, key: 'jukebox.sid'}));
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function() {
    app.use(express.errorHandler());
});

// Routes

// API
app.get('/api/queue/:source/:id', routes.queue);
app.get('/api/sources', routes.sources);
app.get('/api/search', routes.search);
app.get('/api/artist/:id/albums', routes.albums);
app.get('/api/artist/:id', routes.artist);
app.get('/api/album/:id', routes.album);
app.get('/api/track/:id', routes.track);
app.get('/api/search', routes.search);

// DEEZER
app.get('/channel', routes.channel);

// PLAYER
app.get('/player', routes.checkSession, routes.player);

// WEB SITE
app.get('/login', routes.login);
app.get('/logout', routes.logout);
app.get('/', routes.checkSession, routes.index);

module.exports = app;
