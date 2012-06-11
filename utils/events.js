function EventManager() {
    console.log('---> Create EventManager');
}

EventManager.prototype.init = function(app, store) {
    var io = require('socket.io'),
        connect = require('express/node_modules/connect');

    this.sockets = {};

    this.parseCookie = connect.utils.parseCookie;

    this.store = store;
    this.io = io.listen(app);
    this.io.set('authorization', this.checkAuthorization.bind(this));
    this.io.sockets.on('connection', this.onConnect.bind(this));
    this.io.set('log level', 1);
};

EventManager.prototype.onConnect = function(socket) {
    console.log('onConnect', socket.handshake.session.login);
    this.sockets[socket.handshake.session.login] = socket;
};

EventManager.prototype.checkAuthorization = function(data, accept) {
    if (data.headers.cookie) {
        data.cookie = this.parseCookie(data.headers.cookie);
        data.sessionID = data.cookie['jukebox.sid'];
        this.getSession(data.sessionID, function(session) {
            if (session) {
                data.session = session;
                accept(null, true);
            } else {
                accept("Session doesn't exist.", false);
            }
        });
    } else {
       return accept('No cookie transmitted.', false);
    }
};

EventManager.prototype.getSession = function(id, callback) {
    this.store.get(id, function (err, session) {
        if (err || !session || !session.login) {
            callback.call(this, false);
        } else {
            callback.call(this, session);
        }
    });
};

EventManager.prototype.getSocket = function(id) {
    return this.sockets[id] || false;
};

EventManager.prototype.emit = function(login, event, data) {
    var socket = this.getSocket(login);
    console.log('EMIT', login, event);
    if (socket) {
        console.log('EMIT', event);
        socket.emit(event, data);
    }
};

module.exports = new EventManager();
