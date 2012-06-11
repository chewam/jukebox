Ext.define('JB.controller.Player', {

    extend: 'Ext.app.Controller',

    views: ['Player'],

    refs: [{
        ref: 'player',
        selector: 'player'
    }, {
        ref: 'progressbar',
        selector: 'player > progressbar'
    }, {
        ref: 'playButton',
        selector: 'player button[action="play"]'
    }, {
        ref: 'pauseButton',
        selector: 'player button[action="pause"]'
    }],

    titleTpl: new Ext.XTemplate(
        '<div>{[values.artist.name]} - {title} ({[values.album.title]})</div>'
    ),

    init: function() {
        this.control({
            'player': {
                render: this.onPlayerRender
            },
            'player button[action="play"]': {
                click: this.onPlayButtonClick
            },
            'player button[action="pause"]': {
                click: this.onPauseButtonClick
            },
            'player button[action="autoplay"]': {
                toggle: this.onAutoplayButtonToggle
            }
        });

        Ext.getStore('Queue').on({
            scope: this,
            datachanged: this.onQueueChange
        });
    },

    onPlayerRender: function() {
        this.initPlayer();
    },

    initPlayer: function() {
        DZ.init({
            appId: '102941',
            channelUrl: 'http://'+ __HOST__ +'/channel',
            player: {
                onload: Ext.bind(this.onLoad, this)
            }
        });

        DZ.Event.suscribe('current_track', Ext.bind(this.onTrackUpdate, this));
        DZ.Event.suscribe('player_position', Ext.bind(this.onPositionUpdate, this));
    },

    onLoad: function() {
        this.getController('Main').fireEvent('playerload');
    },

    onTrackUpdate: function(data) {
        var title = this.titleTpl.apply(data.track);

        this.toggleButtons('play');
        this.currentTrack = data.track;
        this.getPlayer().setTitle(title);
    },

    onQueueChange: function(store) {
        if (!this.isPlaying) {
            if (store.getCount()) {
                this.enablePlayButton();
                if (this.autoPlay) {
                    this.play();
                }
            } else {
                this.disablePlayButton();
            }
        }
    },

    onPositionUpdate: function(progress) {
        var value = progress[0] / progress[1],
            progressbar = this.getProgressbar();

        progressbar.updateProgress(value, '', true);

        if (!progress[0] && !progress[1] && this.isPlaying) {
            this.resetPlayer();
            this.play();
        } else if (progress[0]) {
            this.isPlaying = true;
        }
    },

    onPlayButtonClick: function(button, event) {
        this.toggleButtons('play');
        this.play();
    },

    onPauseButtonClick: function(button, event) {
        this.toggleButtons('pause');
        DZ.player.pause();
    },

    /*****/

    playTracks: function(tracks) {
        DZ.player.playTracks(tracks, 0, function(response) {
            console.info("playTracks", response.tracks);
        });
    },

    play: function() {
        if (!this.currentTrack) {
            var track,
                store = Ext.getStore('Queue');

            if (store.getCount()) {
                track = store.first();
                this.playTracks([track.getId()]);
            }
        } else {
            DZ.player.play();
        }
    },

    pause: function() {
        DZ.player.pause();
    },

    resetPlayer: function() {
        var id = this.currentTrack.id,
            store = Ext.getStore('Queue'),
            controller = this.getController('Main');

        controller.fireEvent('trackend', id);

        this.isPlaying = false;
        this.currentTrack = false;
        this.toggleButtons('pause');
        this.getPlayer().setTitle(' ');
        if (!store.getCount()) {
            this.disablePlayButton();
        }
    },

    enablePlayButton: function() {
        this.getPlayButton().enable();
    },

    disablePlayButton: function() {
        this.getPlayButton().disable();
    },

    toggleButtons: function(state) {
        if (state === 'pause') {
            this.getPauseButton().hide();
            this.getPlayButton().show();
        } else {
            this.getPlayButton().hide();
            this.getPauseButton().show();
        }
    },

    onAutoplayButtonToggle: function(button, pressed) {
        this.autoPlay = pressed;
        if (pressed && !this.isPlaying) {
            this.play();
        }
    }

});
