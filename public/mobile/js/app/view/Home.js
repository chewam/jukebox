Ext.define('JB.view.Home', {

    xtype: 'jb_home',

    extend: 'Ext.Container',

    config: {
        cls: 'jb_home',
        items: [{
            ui: 'default',
            xtype: 'panel',
            cls: 'jb_home_user',
            items: [{
                role: 'user',
                cls: 'jb_home_user_info',
                xtype: 'container',
                styleHtmlContent: true,
                tpl: JB.utils.Templates.getUserTpl()
            }, {
                layout: 'hbox',
                xtype: 'container',
                defaults: {
                    flex: 1,
                    ui: 'plain',
                    xtype: 'button'
                },
                items: [{
                    text: '<div class="count">429</div>QUEUED'
                }, {
                    text: '<div class="count">371</div>PLAYED'
                }, {
                    text: '<div class="count">3</div>PENDING'
                }]
            }]
        }, {
            ui: 'default',
            margin: '8 8 0',
            action: 'map',
            xtype: 'button',
            iconMask: true,
            iconAlign: 'right',
            iconCls: 'arrow_right',
            text: 'SELECT A SOURCE<br />OF MUSIC ON THE MAP'
        }, {
            role: 'info',
            ui: 'default',
            xtype: 'panel',
            styleHtmlContent: true,
            html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }, {
            hidden: true,
            ui: 'default',
            xtype: 'panel',
            role: 'source',
            cls: 'jb_home_source',
            items: [{
                xtype: 'container',
                styleHtmlContent: true,
                tpl: JB.utils.Templates.getSourceTpl()
            }, {
                ui: 'default',
                margin: '8 0 0 0',
                xtype: 'button',
                action: 'detail',
                text: 'Source details'
            }]
        }]
    }

});
