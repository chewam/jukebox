Ext.define('JB.view.Album', {

    xtype: 'jb_album',

    extend: 'Ext.Container',

    requires: [
        'JB.view.album.Info',
        'JB.view.album.Tracks'
    ],

    config: {
        title: 'ALBUM',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            height: 160,
            xtype: 'jb_album_info'
        }, {
            flex: 1,
            xtype: 'jb_album_tracks'
        }, {
            docked: 'bottom',
            xtype: 'toolbar',
            items: [{
                action: 'artist',
                xtype: 'button',
                text: 'artist'
            }]
        }]
    }

});
