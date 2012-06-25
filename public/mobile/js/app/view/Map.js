Ext.define('JB.view.Map', {

    xtype: 'jb_map',

    extend: 'Ext.Panel',

    config: {
        cls: 'jb_map',
        ui: 'default',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'map',
            flex: 1,
            useCurrentLocation: true,
            mapOptions: {
                zoom: 17
            }
        }]
    }

});
