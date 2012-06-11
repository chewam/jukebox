Ext.define('JB.controller.Login', {

    extend: 'Ext.app.Controller',

    config: {
        views: ['Login'],
        refs: {
            form: 'jb_login' 
        },
        control: {
            'jb_login button[action="signin"]': {
                tap: 'onSignInButtonTap'
            }
        },
        before: {

        },
        routes: {

        }
    },

    init: function() {
        console.log('init');
    },

    onSignInButtonTap: function() {
        var form = this.getForm(),
            values = form.getValues(),
            login = values.login;

        if (login && login.length) {
            JB.utils.Config.setLogin(login);
            this.redirectTo('map');
        }
        console.log('onSignInButtonTap', values);
    }

});
