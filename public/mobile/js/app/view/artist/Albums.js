Ext.define('JB.view.artist.Albums', {

    xtype: 'jb_artist_albums',

    extend: 'Ext.List',

    config: {
        ui: 'round',
        store: 'albums',
        itemTpl: '{title}'
    }

});
