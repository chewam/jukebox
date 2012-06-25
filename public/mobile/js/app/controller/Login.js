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
        var user,
            form = this.getForm(),
            values = form.getValues(),
            login = values.login,
            store = Ext.getStore('users');

        if (login && login.length) {
            store.removeAll();
            user = store.add({login: login});
            store.sync();
            JB.utils.Config.setUser(user);
            this.redirectTo('');
        }
    }

});
