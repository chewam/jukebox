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
        this.mon(this, 'playerload', this.onPlayerLoad, this);
    },

    onPlayerLoad: function() {
        var socket = io.connect('http://' + __HOST__);

        socket.on('queue', Ext.bind(this.onQueue, this));
    },

    onQueue: function (id) {
        console.log('onQueue', arguments);
        var player = this.getController('Player');

        player.play([id]);
        this.loadTrackData(id);
    },

    loadTrackData: function(id) {
        var queue = this.getController('Queue'),
            Track = Ext.ModelManager.getModel('JB.model.Track');

        Track.load(id, {
            success: function(track) {
                console.log('on track load', this, arguments);
                queue.addTrack(track);
            }
        });
    }

});
