Ext.define('JB.view.Source', {

    xtype: 'jb_source',

    extend: 'Ext.Container',

    config: {
        items: [{
            docked: 'top',
            title: 'Source',
            xtype: 'toolbar',
            items: [{
                ui: 'back',
                text: 'Back',
                action: 'back',
                xtype: 'button'
            }]
        }]
    }

});
