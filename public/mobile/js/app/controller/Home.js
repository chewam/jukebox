Ext.define('JB.controller.Home', {

    extend: 'Ext.app.Controller',

    config: {
        views: ['Home'],
        refs: {
            mapButton: 'jb_home button[action="map"]',
            searchPanel: 'jb_tabpanel jb_search',
            playlistPanel: 'jb_tabpanel jb_playlist',
            userPanel: 'jb_home container[role="user"]',
            infoPanel: 'jb_home container[role="info"]',
            sourcePanel: 'jb_home container[role="source"]'
        },
        control: {
            mapButton: {
                tap: 'onMapButtonTap'
            },
            'jb_home': {
                activate: 'onPanelActivate'
            },
            // 'jb_home button[action="source"]': {
            //     tap: 'onSourceButtonTap'
            // },
            // playlistButton: {
            //     tap: 'onPlaylistButtonTap'
            // },
            // searchButton: {
            //     tap: 'onSearchButtonTap'
            // },
            'jb_home button[action="detail"]': {
                tap: 'onDetailButtonTap'
            }
        },
        before: {

        },
        routes: {

        }
    },

    init: function() {
        JB.utils.Config.on({
            scope: this,
            sourcechange: this.onSourceChange
        });
    },

    onPanelActivate: function(panel) {
        var userPanel = this.getUserPanel(),
            user = JB.utils.Config.getUser();

        userPanel.setRecord(user);
    },

    showSourceInfo: function() {
        var mapButton = this.getMapButton(),
            infoPanel = this.getInfoPanel(),
            sourcePanel = this.getSourcePanel(),
            source = JB.utils.Config.getSource();

        sourcePanel.down('container').setRecord(source);

        mapButton.hide();
        infoPanel.hide();
        sourcePanel.show();
    },

    hideSourceInfo: function() {
        var mapButton = this.getMapButton(),
            sourcePanel = this.getSourcePanel();

        sourcePanel.hide();
        mapButton.show();
    },

    enablePanels: function() {
        var searchPanel = this.getSearchPanel(),
            playlistPanel = this.getPlaylistPanel();

        searchPanel.enable();
        playlistPanel.enable();
    },

    disablePanels: function() {
        var searchPanel = this.getSearchPanel(),
            playlistPanel = this.getPlaylistPanel();

        searchPanel.disable();
        playlistPanel.disable();
    },

    onSourceChange: function(newSource) {
        if (newSource) {
            this.showSourceInfo();
            this.enablePanels();
        } else {
            this.hideSourceInfo();
            this.disablePanels();
        }
    },

    onMapButtonTap: function() {
        this.redirectTo('map');
    },

    // onSourceButtonTap: function() {
    //     this.redirectTo('map');
    // },

    // onPlaylistButtonTap: function() {
        
    // },

    // onSearchButtonTap: function() {
    //     this.redirectTo('search/track');
    // },

    onDetailButtonTap: function() {
        var source = JB.utils.Config.getSource();

        this.redirectTo(source);
    }

});
