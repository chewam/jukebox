Ext.define('JB.model.Source', {

    extend: 'Ext.data.Model',

    config: {
        fields: [
            'id',
            'lat',
            'lng',
            {name: 'img', defaultValue: 'http://placehold.it/70x70'}
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
