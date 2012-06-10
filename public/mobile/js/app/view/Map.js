Ext.define('JB.view.Map', {

    xtype: 'jb_map',

    extend: 'Ext.Container',

    config: {
        layout: 'fit',
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            title: 'MAP'
        }, {
            xtype: 'map',
            useCurrentLocation: true,
            mapOptions: {
                zoom: 17
            }
        }]
    }

});
