Ext.define('JB.utils.Config', {

    extend: 'Object',

    singleton: true,

    config: {
        login: null,
        source: null
    },

    constructor: function(config) {
        this.initConfig(config);
    }

});
