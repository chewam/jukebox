Ext.define('JB.controller.Main', {

    extend: 'Ext.app.Controller',

    config: {
        views: ['Navigation', 'TabPanel'],
        models: ['Artist', 'Album', 'Track', 'Tracks', 'Source', 'User'],
        stores: ['Artists', 'Albums', 'Tracks', 'Search', 'Sources', 'Users'],
        refs: {
            home: 'jb_home',
            // home: {
            //     autoCreate: true,
            //     xtype: 'jb_home',
            //     selector: 'viewport jb_home'
            // },
            map: 'jb_tabpanel jb_map',
            // map: {
            //     autoCreate: true,
            //     xtype: 'jb_map',
            //     selector: 'viewport jb_map'
            // },
            login: {
                autoCreate: true,
                xtype: 'jb_login',
                selector: 'viewport jb_login'
            },
            source: {
                autoCreate: true,
                xtype: 'jb_source',
                selector: 'viewport jb_source'
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
            },
            tabPanel: {
                autoCreate: true,
                xtype: 'jb_tabpanel',
                selector: 'viewport jb_tabpanel'
            }
        },
        control: {
            'jb_navigation button[action="search"]': {
                tap: 'onSearchButtonTap'
            }
        },
        before: {
            showMap: ['checkLogin', 'showTabPanel'],
            showSource:['checkLogin', 'checkSource'],
            showTrack: ['checkLogin'/*, 'checkSource'*/, 'showNavigation'],
            showAlbum: ['checkLogin'/*, 'checkSource'*/, 'showNavigation'],
            showArtist: ['checkLogin'/*, 'checkSource'*/, 'showNavigation'],
            showSearch: ['checkLogin', 'checkSource'],
            showHome: ['checkLogin', 'showTabPanel']
        },
        routes: {
            '': 'showHome',
            'map': 'showMap',
            'login': 'showLogin',
            'search/:type/:query': 'showSearch',
            'search/:type': 'showSearch',
            'search': 'showSearch',
            'track/:id': 'showTrack',
            'album/:id': 'showAlbum',
            'artist/:id': 'showArtist',
            'source/:id': 'showSource'
        }
    },

    // init: function() {
        // console.log('init');
    // },

    // launch: function() {
        // console.log('launch');
        // Ext.Viewport.add(this.getNavigation());
        // Ext.Viewport.add(this.getSearch());
        // Ext.Viewport.add(this.getMap());
    // },

    checkLogin: function(action) {
        console.log('checkLogin', JB.utils.Config.getUser());
        if (JB.utils.Config.getUser()) {
            action.resume();
        } else {
            this.redirectTo('login');
        }
    },

    checkSource: function(action) {
        console.log('checkSource', JB.utils.Config.getSource());
        if (JB.utils.Config.getSource()) {
            action.resume();
        } else {
            this.redirectTo('');
        }
    },

    showTabPanel: function(action) {
        console.log('showTabPanel');
        Ext.Viewport.add(this.getTabPanel());
        Ext.Viewport.setActiveItem(this.getTabPanel());
        action.resume();
    },

    showHome: function() {
        console.log('showHome');
        this.getTabPanel().setActiveItem(this.getHome());
        // Ext.Viewport.add(this.getHome());
        // Ext.Viewport.setActiveItem(this.getHome());
    },

    showNavigation: function(action) {
        console.log('showNavigation');
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
        this.getTabPanel().setActiveItem(this.getMap());
        // Ext.Viewport.add(this.getMap());
        // Ext.Viewport.setActiveItem(this.getMap());
    },

    showSource: function() {
        console.log('showSource');
        Ext.Viewport.add(this.getSource());
        Ext.Viewport.setActiveItem(this.getSource());
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
