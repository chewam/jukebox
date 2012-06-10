Ext.define('JB.view.Player', {

    extend: 'Ext.Panel',

    alias: 'widget.player',

    initComponent: function() {

        Ext.apply(this, {
            title: ' ',
            titleAlign: 'right',
            header: {
            //     title: 'Player',
            //     xtype: 'header',
            //     titleAlign: 'right',
                items: [{
                    align: 'right',
                    text: 'pof',
                    xtype: 'button'
                }]
            },
            // tools: [{
            //     type: 'next'
            // }],
            items: [{
            //     height: 20,
            //     xtype: 'panel',
            //     tpl: [
            //         '<div>{artist.name} - {title} ({album.title})</div>'
            //     ]
            // }, {
                xtype: 'progressbar'
            }]
        });

        this.callParent();
    }

});
