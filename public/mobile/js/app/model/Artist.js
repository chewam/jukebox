Ext.define('JB.model.Artist', {

    extend: 'Ext.data.Model',

    config: {
        fields: [
            'id',
            'name',
            'picture',
            'link',
            'nb_album',
            'nb_fan',
            'radio',
            'type'
        ],
        proxy: {
            type: 'rest',
            url: '/api/artist'
        }
    },

    toUrl: function() {
        return 'artist/' + this.getId();
    }

});
