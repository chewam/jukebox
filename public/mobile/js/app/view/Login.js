Ext.define('JB.view.Login', {

    xtype: 'jb_login',

    extend: 'Ext.form.Panel',

    config: {
        ui: 'default',
        items: [{
            xtype: 'fieldset',
            items: [{
                name: 'login',
                xtype: 'textfield',
                placeHolder: 'Nickname...'
            }, {
                name: 'password',
                xtype: 'textfield',
                margin: '8 0 0 0',
                placeHolder: 'Password...'
            }, {
                ui: 'action',
                xtype: 'button',
                text: 'Sign In',
                action: 'signin',
                margin: '8 0 0 0'
            }]
        // }, {
        //     xtype: 'button',
        //     text: 'Sign In',
        //     action: 'signin'
        }]
    }

});
