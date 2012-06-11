Ext.define('JB.view.Login', {

    xtype: 'jb_login',

    extend: 'Ext.form.Panel',

    config: {
        items: [{
            xtype: 'fieldset',
            items: [{
                name: 'login',
                xtype: 'textfield',
                placeHolder: 'Nickname...'
            }]
        }, {
            xtype: 'button',
            text: 'Sign In',
            action: 'signin'
        }]
    }

});
