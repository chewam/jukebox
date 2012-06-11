Ext.define('JB.controller.Queue', {

    extend: 'Ext.app.Controller',

    views: ['Queue'],

    refs: [{
        ref: 'queue',
        selector: 'queue'
    }],

    init: function() {

    },

    getTrackById: function(id) {
        var queue = this.getQueue(),
            store = queue.getStore();

        return store.getById(id);
    },

    addTrack: function(track) {
        var queue = this.getQueue(),
            store = queue.getStore();

        store.add(track);
    },

    removeTrack: function(track) {
        var queue = this.getQueue(),
            store = queue.getStore();

        store.remove(track);
    }

});
