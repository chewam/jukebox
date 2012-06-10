Ext.define('JB.view.Viewport', {

    extend: 'Ext.container.Viewport',

    layout: 'border',

    requires: [
        // 'JB.view.Player'
    ],

    initComponent: function() {

        Ext.apply(this, {
            items: [{
                // height: 80,
                region: 'north',
                xtype: 'player'
            }, {
                html: 'pof',
                title: 'Queue',
                region: 'center',
                xtype: 'queue'
            }, {
                title: 'Navigation',
                split: true,
                width: '20%',
                region: 'west',
                collapsible: true
            }]
        });

        this.callParent();
    }

});