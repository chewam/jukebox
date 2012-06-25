Ext.define('JB.view.Track', {

    xtype: 'jb_track',

    extend: 'Ext.Container',

    config: {
        title: 'TRACK',
        cls: 'jb_track',
        items: [{
            ui: 'default',
            xtype: 'panel',
            layout: 'hbox',
            items: [{
                flex: 1,
                xtype: 'container',
                // styleHtmlContent: true,
                items: [{
                    role: 'title',
                    xtype: 'container',
                    styleHtmlContent: true,
                    tpl: JB.utils.Templates.getTrackTitleTpl()
                }, {
                    xtype: 'audio'
                }]
            }, {
                ui: 'action',
                action: 'queue',
                margin: '0 0 0 8',
                iconMask: true,
                iconCls: 'arrow_right',
                xtype: 'button'
            }]
        }, {
            ui: 'default',
            xtype: 'panel',
            layout: 'hbox',
            items: [{
                flex: 1,
                role: 'artist',
                xtype: 'container',
                styleHtmlContent: true,
                tpl: JB.utils.Templates.getTrackArtistTpl()
            }, {
                ui: 'action',
                action: 'artist',
                xtype: 'button',
                margin: '0 0 0 8',
                iconMask: true,
                iconCls: 'arrow_right'
            }]
        }, {
            ui: 'default',
            xtype: 'panel',
            layout: 'hbox',
            items: [{
                flex: 1,
                role: 'album',
                xtype: 'container',
                styleHtmlContent: true,
                tpl: JB.utils.Templates.getTrackAlbumTpl()
            }, {
                ui: 'action',
                action: 'album',
                xtype: 'button',
                margin: '0 0 0 8',
                iconMask: true,
                iconCls: 'arrow_right'
            }]
        // }, {
            // docked: 'bottom',
            // xtype: 'toolbar',
            // items: [{
            //     action: 'album',
            //     xtype: 'button',
            //     text: 'album'
            // }, {
            //     action: 'artist',
            //     xtype: 'button',
            //     text: 'artist'
            // // }, {
            //     action: 'queue',
            //     xtype: 'button',
            //     text: 'queue'
            // }]
        // }, {
        //     xtype: 'audio',
        //     docked: 'bottom'
        }]
    }

});
