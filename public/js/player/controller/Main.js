Ext.define('JB.controller.Main', {

    extend: 'Ext.app.Controller',

    init: function() {
    //     this.control({
    //     'player': {
    //         selectionchange: this.onStationSelect
    //     },
    //     'newstation': {
    //         select: this.onNewStationSelect
    //     }
    // });
        this.mon(this, 'trackend', this.onTrackEnd, this);
        this.mon(this, 'playerload', this.onPlayerLoad, this);
    },

    onPlayerLoad: function() {
        var socket = io.connect('http://' + __HOST__);

        socket.on('queue', Ext.bind(this.onQueue, this));
    },

    onQueue: function (data) {
        console.log('onQueue', arguments);
        var player = this.getController('Player');

        // player.playTracks([id]);
        player.enablePlayButton();
        this.loadTrackData(data);
    },

    onTrackEnd: function(id) {
        var queue = this.getController('Queue'),
            history = this.getController('History');

        track = queue.getTrackById(id);
        console.log('onTrackEnd', id, track);
        track.set('lastplay', new Date());
        history.addTrack(track);
        queue.removeTrack(track);
    },

    loadTrackData: function(data) {
        var queue = this.getController('Queue'),
            Track = Ext.ModelManager.getModel('JB.model.Track');

        Track.load(data.id, {
            success: function(track) {
                console.log('on track load', this, arguments, data.emitter);
                track.set('emitter', data.emitter);
                queue.addTrack(track);
            }
        });
    }

});
