Ext.define('JB.view.Artist', {

    xtype: 'jb_artist',

    extend: 'Ext.Container',

    requires: [
        'JB.view.artist.Info',
        'JB.view.artist.Albums'
    ],

    config: {
        title: 'ARTIST',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            height: 110,
            xtype: 'jb_artist_info'
        }, {
            flex: 1,
            xtype: 'jb_artist_albums'
        }]
    }

});
