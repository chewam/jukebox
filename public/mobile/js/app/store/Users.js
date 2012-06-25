Ext.define('JB.store.Users', {

    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        storeId: 'users',
        model: 'JB.model.User',
        proxy: {
            type: 'localstorage',
            id: 'jukebox-user'
        },
        listeners: {
            load: 'onLoad'
        }
    },

    onLoad: function(store, records) {
        console.log('onLoad', this, arguments);

        if (records && records.length) {
            JB.utils.Config.setUser(records[0]);
        }
    }

});
