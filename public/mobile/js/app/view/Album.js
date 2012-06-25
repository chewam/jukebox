Ext.define('JB.view.Album', {

    xtype: 'jb_album',

    extend: 'Ext.Container',

    requires: [
        'JB.view.album.Info',
        'JB.view.album.Tracks'
    ],

    config: {
        title: 'ALBUM',
        cls: 'jb_album',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            height: 110,
            xtype: 'jb_album_info'
        }, {
            ui: 'default',
            xtype: 'panel',
            layout: 'hbox',
            items: [{
                flex: 1,
                role: 'artist',
                tpl: '{artist.name}',
                xtype: 'container',
                styleHtmlContent: true
            }, {
                ui: 'action',
                iconMask: true,
                action: 'artist',
                margin: '0 0 0 8',
                iconCls: 'arrow_right',
                xtype: 'button'
            }]
        }, {
            flex: 1,
            xtype: 'jb_album_tracks'
        }]
    }

});
