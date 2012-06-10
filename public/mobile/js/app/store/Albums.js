Ext.define('JB.store.Albums', {

    extend: 'Ext.data.Store',

    config: {
        storeId: 'albums',
        model: 'JB.model.Album',
        sorters: ['name'],
        proxy: {
            type: 'rest',
            url: '/api/artist',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    },

    constructor: function(config) {
        this.callParent(arguments);
        this.getProxy().buildUrl = this.buildUrl;
    },

    buildUrl: function(request) {
        var me        = this,
            operation = request.getOperation(),
            records   = operation.getRecords() || [],
            record    = records[0],
            model     = me.getModel(),
            idProperty= model.getIdProperty(),
            format    = me.getFormat(),
            url       = me.getUrl(request),
            params    = request.getParams() || {},
            id        = (record && !record.phantom) ? record.getId() : params[idProperty];

        if (me.getAppendId() && id) {
            if (!url.match(/\/$/)) {
                url += '/';
            }
            url += id + '/albums';
            delete params[idProperty];
        }

        if (format) {
            if (!url.match(/\.$/)) {
                url += '.';
            }

            url += format;
        }

        request.setUrl(url);

        if (me.getNoCache()) {
            url = Ext.urlAppend(url, Ext.String.format("{0}={1}", me.getCacheString(), Ext.Date.now()));
        }

        return url;
    }

});
