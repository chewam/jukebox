Ext.define('JB.controller.History', {

    extend: 'Ext.app.Controller',

    views: ['History'],

    refs: [{
        ref: 'history',
        selector: 'history'
    }],

    init: function() {

    },

    addTrack: function(track) {
        var history = this.getHistory(),
            store = history.getStore();

        store.add(track);
    }

});
