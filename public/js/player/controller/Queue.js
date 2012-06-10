Ext.define('JB.controller.Queue', {

    extend: 'Ext.app.Controller',

    views: ['Queue'],

    refs: [{
        ref: 'queue',
        selector: 'queue'
    }],

    init: function() {

    },

    addTrack: function(track) {
        var queue = this.getQueue(),
            store = queue.getStore();

        store.add(track);
    }

});
