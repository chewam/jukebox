Ext.define('JB.view.Player', {

    extend: 'Ext.Panel',

    alias: 'widget.player',

    initComponent: function() {

        Ext.apply(this, {
            title: ' ',
            titleAlign: 'right',
            header: {
                items: [{
                    text: 'Auto Play',
                    action: 'autoplay',
                    xtype: 'button',
                    enableToggle: true
                }, {
                    width: 5,
                    xtype: 'tbspacer'
                }, {
                    text: 'Play',
                    action: 'play',
                    xtype: 'button',
                    disabled: true
                }, {
                    text: 'Pause',
                    action: 'pause',
                    xtype: 'button',
                    hidden: true
                }]
            },
            items: [{
                xtype: 'progressbar'
            }]
        });

        this.callParent();
    }

});
