Ext.define('JB.view.TabPanel', {

    xtype: 'jb_tabpanel',

    extend: 'Ext.TabPanel',

    config: {
        tabBar: {
            ui: 'black'
        },
        tabBarPosition: 'bottom',
        items: [{
            ui: 'default',
            docked: 'top',
            xtype: 'toolbar',
            title: 'JUKEBOX'
        }, {
            iconCls: 'home',
            title: 'Home',
            xtype: 'jb_home'
        }, {
            iconCls: 'locate',
            title: 'Source',
            xtype: 'jb_map'
        }, {
            disabled: true,
            iconCls: 'list',
            title: 'Playlist',
            xtype: 'jb_playlist'
        }, {
            disabled: true,
            iconCls: 'search',
            title: 'Search',
            xtype: 'jb_search'
        }]
    }

});
