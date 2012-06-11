Ext.define('JB.model.Track', {

    extend: 'Ext.data.Model',

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
        'emitter',
        // {name: 'artistPicture', type: 'string', mapping: 'artist.picture'},
        // {name: 'artistName', type: 'string', mapping: 'artist.name'},
        // {name: 'albumTitle', type: 'string', mapping: 'album.title'},
        // {name: 'albumCover', type: 'string', mapping: 'album.cover'},
        {name: 'album_id', type: 'int'},
        {name: 'artist_id', type: 'int'},
        {name: 'lastplay', type: 'date'},
        {name: 'duration', type: 'date', dateFormat: 'timestamp'}
    ],

    proxy: {
        type: 'rest',
        url: '/api/track'
    }

});
