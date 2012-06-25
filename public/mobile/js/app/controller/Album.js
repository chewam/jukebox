Ext.define('JB.controller.Album', {

    extend: 'Ext.app.Controller',

    config: {
        activePanel: null,
        views: ['Album'],
        refs: {
            // panel: 'jb_album',
            // infoPanel: 'jb_album jb_album_info',
            // tracksList: 'jb_album jb_album_tracks'
        },
        control: {
            'jb_album': {
                activate: 'onPanelActivate'
            },
            'jb_album_tracks': {
                itemtap: 'onTracksListItemTap'
            },
            'jb_album button[action="artist"]': {
                tap: 'onArtistButtonTap'
            }
        },
        before: {

        },
        routes: {

        }
    },

    setRoute: function() {
        console.log('setRoute', this.getActivePanel());
        var panel = this.getActivePanel(),
            infoPanel = panel.down('jb_album_info'),
            url = infoPanel.getRecord().toUrl(),
            action = new Ext.app.Action({url: url}),
            history = this.getApplication().getHistory();

        history.add(action, true);
    },

    loadAlbum: function() {
        var model = JB.model.Album,
            panel = this.getActivePanel(),
            infoPanel = panel.down('jb_album_info'),
            artistPanel = panel.down('container[role="artist"]'),
            tracksList = panel.down('jb_album_tracks'),
            id = document.location.hash.split('/')[1];

        panel.setMasked({xtype: 'loadmask'});

        model.load(id, {
            scope: this,
            success: function(record) {
                console.log('load album', id, record, record.tracks());
                infoPanel.setRecord(record);
                artistPanel.setRecord(record);
                tracksList.setStore(record.tracks());
                panel.setMasked(false);
            }
        });
    },

    onPanelActivate: function(panel) {
        var infoPanel = panel.down('jb_album_info'),
            record = infoPanel.getRecord();
        console.log('onPanelActivate album', !record);

        this.setActivePanel(panel);

        if (!record) {
            this.loadAlbum();
        } else {
            this.setRoute();
        }
    },

    onTracksListItemTap: function(list, index, el, record) {
        this.redirectTo(record);
    },

    onArtistButtonTap: function() {
        var panel = this.getActivePanel(),
            infoPanel = panel.down('jb_album_info'),
            record = infoPanel.getRecord(),
            artist = record.getArtist();

        this.redirectTo(artist);
    }

});
