Ext.define('JB.controller.Artist', {

    extend: 'Ext.app.Controller',

    config: {
        activePanel: null,
        views: ['Artist'],
        refs: {

        },
        control: {
            'jb_artist': {
                activate: 'onPanelActivate'
            },
            'jb_artist_albums': {
                itemtap: 'onAlbumsListItemTap'
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
            infoPanel = panel.down('jb_artist_info'),
            url = infoPanel.getRecord().toUrl(),
            action = new Ext.app.Action({url: url}),
            history = this.getApplication().getHistory();

        history.add(action, true);
    },

    loadArtist: function() {
        var model = JB.model.Artist,
            panel = this.getActivePanel(),
            infoPanel = panel.down('jb_artist_info'),
            albumsList = panel.down('jb_artist_albums'),
            id = document.location.hash.split('/')[1];

        panel.setMasked({xtype: 'loadmask'});

        model.load(id, {
            scope: this,
            success: function(record) {
                console.log('load artist', id, record);
                infoPanel.setRecord(record);
                albumsList.getStore().load({
                    params: {id: id}
                });
                // tracksList.setStore(record.tracks());
                panel.setMasked(false);
            }
        });
    },

    onPanelActivate: function(panel) {
        var infoPanel = panel.down('jb_artist_info'),
            record = infoPanel.getRecord();
        console.log('onPanelActivate artist', !record);

        this.setActivePanel(panel);

        if (!record) {
            this.loadArtist();
        } else {
            this.setRoute();
        }
    },

    onAlbumsListItemTap: function(list, index, el, record) {
        this.redirectTo(record);
    }

});
