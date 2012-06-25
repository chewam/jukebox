Ext.define('JB.utils.Config', {

    extend: 'Object',

    singleton: true,

    mixins: ['Ext.mixin.Observable'],

    config: {
        user: null,
        source: null
    },

    constructor: function(config) {
        this.initConfig(config);
        // this.loadUser();
    },

    updateSource: function(newSource, oldSource) {
        console.log('updateSource', this, arguments);
        this.fireEvent('sourcechange', newSource, oldSource);
    }

    // updateUser: function(newUser, oldUser) {
    //     var store = Ext.getStore('users');

    //     if (oldUser) {
    //         store.removeAll();
    //         store.add(newUser);
    //     }
    // }

    // loadUser: function() {
        // var store = Ext.getStore('users');

        // store.load(function() {
        //     this.setUser(store.first());
        //     console.log('loadUser', store.first());
        // }, this);
    // }

});
