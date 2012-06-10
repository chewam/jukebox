Ext.define('JB.view.Track', {

    xtype: 'jb_track',

    extend: 'Ext.Container',

    config: {
        title: 'TRACK',
        cls: 'jb_track',
        styleHtmlContent: true,
        tpl: JB.utils.Templates.getTrackTpl(),
        items: [{
            docked: 'bottom',
            xtype: 'toolbar',
            items: [{
                action: 'album',
                xtype: 'button',
                text: 'album'
            }, {
                action: 'artist',
                xtype: 'button',
                text: 'artist'
            }, {
                action: 'queue',
                xtype: 'button',
                text: 'queue'
            }]
        }, {
            xtype: 'audio',
            docked: 'bottom'
        }]
    }

});
