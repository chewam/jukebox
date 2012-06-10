Ext.define('JB.model.Track', {

    extend: 'Ext.data.Model',

    config: {
        associations: [{
            type: 'belongsTo',
            primaryKey: 'id',
            foreignKey: 'album_id',
            associationKey: 'album',
            model: 'JB.model.Album'
        }, {
            type: 'belongsTo',
            primaryKey: 'id',
            foreignKey: 'artist_id',
            associationKey: 'artist',
            model: 'JB.model.Artist'
        }],
        fields: [
            'id',
            'album',
            'artist',
            'link',
            'rank',
            'preview',
            'readable',
            'title',
            'track_position',
            'type',
            {name: 'album_id', type: 'int'},
            {name: 'artist_id', type: 'int'},
            {name: 'duration', type: 'date', dateFormat: 'timestamp'}
        ],
        proxy: {
            type: 'rest',
            url: '/api/track'
        }
    },

    toUrl: function() {
        console.log('toUrl', 'track/' + this.getId());
        return 'track/' + this.getId();
    }

});
