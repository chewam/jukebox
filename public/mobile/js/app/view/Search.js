Ext.define('JB.view.Search', {

    xtype: 'jb_search',

    extend: 'Ext.List',

    config: {
        ui: 'round',
        title: 'SEARCH',
        store: 'search',
        cls: 'jb_search',
        itemTpl: JB.utils.Templates.getTrackItemTpl(),
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            items: [{
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
