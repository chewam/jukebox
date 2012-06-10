Ext.define('JB.model.Source', {

    extend: 'Ext.data.Model',

    config: {
        fields: [
            'id',
            'lat',
            'lng'
        ],
        proxy: {
            type: 'rest',
            url: '/api/source'
        }
    },

    toUrl: function() {
        console.log('toUrl', 'source/' + this.getId());
        return 'source/' + this.getId();
    }

});
