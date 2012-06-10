Ext.define('JB.model.Album', {

    extend: 'Ext.data.Model',

    config: {
        associations: [{
            type: 'belongsTo',
            primaryKey: 'id',
            foreignKey: 'artist_id',
            associationKey: 'artist',
            model: 'JB.model.Artist'
        }, {
            type: 'hasMany',
            primaryKey: 'id',
            foreignKey: 'track_id',
            associationKey: 'tracks',
            model: 'JB.model.Tracks'
        }],
        fields: [
            'id',
            'title',
            'cover',
            'fans',
            'label',
            'link',
            'release_date',
            'type',
            'artist',
            {name: 'artist_id', type: 'int'},
            {name: 'track_id', type: 'int'},
            {name: 'duration', type: 'date', dateFormat: 'timestamp'}
        ],
        proxy: {
            type: 'rest',
            url: '/api/album'
        }
    },

    toUrl: function() {
        return 'album/' + this.getId();
    }

});
