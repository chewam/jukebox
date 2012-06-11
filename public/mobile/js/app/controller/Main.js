Ext.define('JB.controller.Main', {

    extend: 'Ext.app.Controller',

    config: {
        views: ['Navigation'],
        models: ['Artist', 'Album', 'Track', 'Tracks', 'Source'],
        stores: ['Artists', 'Albums', 'Tracks', 'Search', 'Sources'],
        refs: {
            map: {
                autoCreate: true,
                xtype: 'jb_map',
                selector: 'viewport jb_map'
            },
            login: {
                autoCreate: true,
                xtype: 'jb_login',
                selector: 'viewport jb_login'
            },
            search: {
                autoCreate: true,
                xtype: 'jb_search',
                selector: 'viewport jb_search'
            },
            navigation: {
                autoCreate: true,
                xtype: 'jb_navigation',
                selector: 'viewport jb_navigation'
            }
        },
        control: {
            'jb_navigation button[action="search"]': {
                tap: 'onSearchButtonTap'
            }
        },
        before: {
            showMap: ['checkLogin'],
            showTrack: ['checkLogin', 'checkSource', 'showNavigation'],
            showAlbum: ['checkLogin', 'checkSource', 'showNavigation'],
            showArtist: ['checkLogin', 'checkSource', 'showNavigation'],
            showSearch: ['checkLogin', 'checkSource'],
            showDefaultRoute: ['checkLogin']
        },
        routes: {
            '': 'showDefaultRoute',
            'map': 'showMap',
            'login': 'showLogin',
            'search/:type/:query': 'showSearch',
            'search/:type': 'showSearch',
            'search': 'showSearch',
            'track/:id': 'showTrack',
            'album/:id': 'showAlbum',
            'artist/:id': 'showArtist'
        }
    },

    init: function() {
        console.log('init');
    },

    launch: function() {
        console.log('launch');
        // Ext.Viewport.add(this.getNavigation());
        // Ext.Viewport.add(this.getSearch());
        // Ext.Viewport.add(this.getMap());
    },

    checkLogin: function(action) {
        if (JB.utils.Config.getLogin()) {
            action.resume();
        } else {
            this.redirectTo('login');
        }
    },

    checkSource: function(action) {
        if (JB.utils.Config.getSource()) {
            action.resume();
        } else {
            this.redirectTo('map');
        }
    },

    showDefaultRoute: function() {

    },

    showNavigation: function(action) {
        Ext.Viewport.add(this.getNavigation());
        Ext.Viewport.setActiveItem(this.getNavigation());
        action.resume();
    },

    showLogin: function() {
        console.log('showLogin');
        Ext.Viewport.add(this.getLogin());
        Ext.Viewport.setActiveItem(this.getLogin());
    },

    showMap: function() {
        console.log('showMap');
        Ext.Viewport.add(this.getMap());
        Ext.Viewport.setActiveItem(this.getMap());
    },

    showSearch: function() {
        console.log('showSearch');
        Ext.Viewport.add(this.getSearch());
        Ext.Viewport.setActiveItem(this.getSearch());
    },

    showTrack: function() {
        console.log('showTrack');
        this.getNavigation().push({
            xtype: 'jb_track'
        });
    },

    showAlbum: function() {
        console.log('showAlbum');
        this.getNavigation().push({
            xtype: 'jb_album'
        });
    },

    showArtist: function() {
        console.log('showArtist');
        this.getNavigation().push({
            xtype: 'jb_artist'
        });
    },

    onSearchButtonTap: function() {
        console.log('onSearchButtonTap');
        this.redirectTo('search');
    }

});
