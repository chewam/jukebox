Ext.define('JB.controller.Track', {

    extend: 'Ext.app.Controller',

    config: {
        activePanel: null,
        views: ['Track'],
        refs: {
            // panel: 'jb_track',
            // audio: 'jb_track audio'
        },
        control: {
            'jb_track': {
                activate: 'onPanelActivate'
            },
            'jb_track button[action="album"]': {
                tap: 'onAlbumButtonTap'
            },
            'jb_track button[action="artist"]': {
                tap: 'onArtistButtonTap'
            },
            'jb_track button[action="queue"]': {
                tap: 'onQueueButtonTap'
            }
        },
        before: {

        },
        routes: {

        }
    },

    setRoute: function() {
        var panel = this.getActivePanel(),
            url = panel.getRecord().toUrl(),
            action = new Ext.app.Action({url: url}),
            history = this.getApplication().getHistory();

        history.add(action, true);
    },

    loadTrack: function() {
        var model = JB.model.Track,
            panel = this.getActivePanel(),
            audio = panel.down('audio'),
            id = document.location.hash.split('/')[1];

        panel.setMasked({xtype: 'loadmask'});

        model.load(id, {
            scope: this,
            success: function(record) {
                console.log('load track', id, record);
                audio.setUrl(record.get('preview'));
                panel.setRecord(record);
                panel.setMasked(false);
            }
        });
    },

    onPanelActivate: function(panel) {
        console.log('onPanelActivate track', !panel.getRecord());
        var record = panel.getRecord();

        this.setActivePanel(panel);

        if (!record) {
            this.loadTrack();
        } else {
            this.setRoute();
        }
    },

    onQueueButtonTap: function() {
        var panel = this.getActivePanel(),
            record = panel.getRecord(),
            id = record.getId(),
            source = JB.utils.Config.getSource(),
            emitter = JB.utils.Config.getLogin();

        Ext.Ajax.request({
            url: '/api/queue/' + source.getId() + '/' + id + '?emitter=' + emitter,
            callback: function() {
                console.log('queue callback', arguments);
            }
        });
    },

    onAlbumButtonTap: function() {
        var panel = this.getActivePanel(),
            record = panel.getRecord(),
            album = record.getAlbum();

        this.redirectTo(album);
    },

    onArtistButtonTap: function() {
        var panel = this.getActivePanel(),
            record = panel.getRecord(),
            artist = record.getArtist();

        this.redirectTo(artist);
    }

});
