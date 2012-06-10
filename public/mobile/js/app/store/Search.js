Ext.define('JB.store.Search', {

    extend: 'Ext.data.Store',

    config: {
        storeId: 'search',
        model: 'JB.model.Track',
        // sorters: ['name'],
        proxy: {
            type: 'rest',
            url: '/api/search',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    }

});
