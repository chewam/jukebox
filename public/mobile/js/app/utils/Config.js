Ext.define('JB.utils.Config', {

    extend: 'Object',

    singleton: true,

    config: {
        source: null
    },

    constructor: function(config) {
        this.initConfig(config);
    }

});
