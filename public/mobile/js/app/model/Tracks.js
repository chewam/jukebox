Ext.define('JB.model.Tracks', {

    extend: 'JB.model.Track',

    requires: ['JB.model.Track'],

    config: {
        proxy: {
            type: 'rest',
            appendId: false,
            url: 'proxy/track.php',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    }

});
