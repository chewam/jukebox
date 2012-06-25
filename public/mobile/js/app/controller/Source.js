Ext.define('JB.controller.Source', {

    extend: 'Ext.app.Controller',

    config: {
        views: ['Source'],
        refs: {

        },
        control: {
            'jb_source button[action="back"]': {
                tap: 'onBackButtonTap'
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

    onBackButtonTap: function() {
        this.redirectTo('');
    }

});
