Ext.define('JB.view.Viewport', {

    extend: 'Ext.container.Viewport',

    layout: 'border',

    initComponent: function() {

        Ext.apply(this, {
            items: [{
                region: 'north',
                xtype: 'player'
            }, {
                region: 'center',
                xtype: 'tabpanel',
                items: [{
                    title: 'Queue',
                    xtype: 'queue'
                }, {
                    title: 'History',
                    xtype: 'history'
                }]
            }, {
                title: 'Navigation',
                split: true,
                width: '20%',
                region: 'west',
                collapsed: true,
                collapsible: true
            }]
        });

        this.callParent();
    }

});
