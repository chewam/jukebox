Ext.define('JB.view.Navigation', {

    xtype: 'jb_navigation',

    extend: 'Ext.NavigationView',

    config: {
        navigationBar: {
            items: [{
                ui: 'plain',
                align: 'right',
                xtype: 'button',
                iconCls: 'search',
                iconMask: true,
                action: 'search'
            }]
        }
    }

    // pop: function() {
    //     this.fireEvent('beforepop', this, this.getPreviousItem(), this.getActiveItem());
    //     this.callParent(arguments);
    // }

});