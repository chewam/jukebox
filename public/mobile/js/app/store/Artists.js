Ext.define('JB.store.Artists', {

    extend: 'Ext.data.Store',

    config: {
        storeId: 'artists',
        model: 'JB.model.Artist',
        sorters: ['name'],
        proxy: {
            type: 'rest',
            noCache: false,
            limitParam: false,
            startParam: false,
            url: 'proxy/artists.php',
            reader: {
                type: 'json',
                rootProperty: 'artist'
            }
        }
    }

});
