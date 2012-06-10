Ext.define('JB.controller.Player', {

    extend: 'Ext.app.Controller',

    views: ['Player'],

    refs: [{
        ref: 'player',
        selector: 'player'
    }, {
        ref: 'progressbar',
        selector: 'player > progressbar'
    // }, {
    //     ref: 'infoPanel',
    //     selector: 'player > panel'
    }],

    init: function() {
        this.control({
            'player': {
                render: this.onPlayerRender
            }
        });
    },

    onPlayerRender: function() {
        console.log('onPlayerRender', this, arguments);
        this.initPlayer();
    },

    initPlayer: function() {
        console.log('initPlayer');
        DZ.init({
            appId: '102941',
            channelUrl: 'http://'+ __HOST__ +'/channel',
            player: {
                // container: 'player',
                // cover: true,
                // playlist: true,
                // width: 729,
                // height: 308,
                // format: 'vertical',
                onload: Ext.bind(this.onPlayerLoad, this)
            }
        });

        DZ.Event.suscribe('player_play', Ext.bind(this.onPlay, this));
        DZ.Event.suscribe('player_load', Ext.bind(this.onLoad, this));
        DZ.Event.suscribe('player_paused', Ext.bind(this.onPause, this));
        DZ.Event.suscribe('current_track', Ext.bind(this.onTrackUpdate, this));
        DZ.Event.suscribe('player_position', Ext.bind(this.onPositionUpdate, this));
    },

    onPlayerLoad: function() {
        console.log('onPlayerLoad');
        this.getController('Main').fireEvent('playerload');
    },

    onPlay: function() {
        console.log('onPlay', this, arguments);
    },

    onTrackUpdate: function(data) {
        console.log('onTrackUpdate', this, arguments);
        var titleTpl = new Ext.Template('<div>{artist.name} - {title} ({album.title})</div>');
        this.getPlayer().setTitle(titleTpl.apply(data.track));
    },

    onLoad: function() {
        console.log('onLoad', this, arguments);
    },

    onPause: function() {
        console.log('onPause', this, arguments);
    },

    onPositionUpdate: function(progress) {
        var value = progress[0] / progress[1],
            progressbar = this.getProgressbar();

        console.log('onPositionUpdate', progress[0], progress[1], value);
        
        progressbar.updateProgress(value, '', true);

        if (!progress[0] && !progress[1]) {
            this.resetPlayer();
        }
    },

    /*****/

    play: function(tracks) {
        DZ.player.playTracks(tracks, 0, function(response) {
            console.log("track list", response.tracks);
        });
    },

    resetPlayer: function() {
        this.getPlayer().setTitle(' ');
    }

});
