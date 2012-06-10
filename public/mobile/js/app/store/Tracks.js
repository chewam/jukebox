Ext.define('JB.store.Tracks', {

    extend: 'Ext.data.Store',

    config: {
        storeId: 'tracks',
        model: 'JB.model.Track',
        sorters: ['name']
    }

});
