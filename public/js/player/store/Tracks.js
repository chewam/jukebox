Ext.define('JB.store.Tracks', {

    extend: 'Ext.data.Store',

    // requires: 'JB.model.Song',

    model: 'JB.model.Track'

    // Overriding the model's default proxy
    // proxy: {
    //     type: 'ajax',
    //     url: 'data/searchresults.json',
    //     reader: {
    //         type: 'json',
    //         root: 'results'
    //     }
    // }
});
