Ext.define('JB.view.map.Details', {

    xtype: 'jb_map_details',

    extend: 'Ext.Sheet',

    config: {
        bottom: 0,
        height: 150,
        modal: false,
        stretchX: true,
        enter: 'bottom',
        cls: 'jb_map_details',
        tpl: '{id}',
        styleHtmlContent: true,
        items: [{
            layout: 'vbox',
            docked: 'right',
            xtype: 'container',
            cls: 'jb_map_details_actions',
            items: [{
                ui: 'plain',
                iconMask: true,
                action: 'close',
                xtype: 'button',
                iconCls: 'delete'
            }, {
                flex: 1,
                xtype: 'spacer'
            }, {
                text: 'OK',
                ui: 'action',
                xtype: 'button',
                action: 'select'
            }]
        }],
        listeners: {
            hide: function() {
                this.destroy();
            }
        }
    }

});
