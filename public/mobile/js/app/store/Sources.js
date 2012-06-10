Ext.define('JB.store.Sources', {

    extend: 'Ext.data.Store',

    config: {
        storeId: 'sources',
        model: 'JB.model.Source',
        proxy: {
            type: 'rest',
            url: '/api/sources',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    }

});
