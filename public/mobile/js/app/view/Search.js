Ext.define('JB.view.Search', {

    xtype: 'jb_search',

    extend: 'Ext.List',

    config: {
        ui: 'round',
        store: 'search',
        cls: 'jb_search',
        itemTpl: JB.utils.Templates.getTrackItemTpl(),
        items: [{
            ui: 'trans',
            docked: 'top',
            xtype: 'toolbar',
            items: [{
                ui: 'default',
                xtype: 'button',
                iconMask: true,
                iconCls: 'track',
                action: 'searchtype'
            }, {
                flex: 1,
                xtype: 'searchfield',
                placeHolder: 'Look for music...'
            }]
        }]
    }

});
