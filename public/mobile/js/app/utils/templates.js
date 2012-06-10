Ext.define('JB.utils.Templates', {

    extend: 'Object',

    singleton: true,

    config: {
        trackTpl: [
            '<h1>{title}</h1>',
            '<div>{[Ext.Date.format(values.duration, "i:s")]}</div>',
            '<div class="album">',
                '<div class="img" style="background-image: url({album.cover})"></div>',
                '<div>{album.title}</div>',
            '</div>',
            '<div class="artist">',
                '<div class="img" style="background-image: url({artist.picture})"></div>',
                '<div>{artist.name}</div>',
            '</div>'
        ],
        albumTpl: [
            '<div class="image" style="background-image: url({cover})"></div>',
            '<div class="info">',
                '<div>{title}</div>',
                '<div>{artist.name}</div>',
                '<div>Label: {label}</div>',
                '<div>Duration: {[Ext.Date.format(values.duration, "i:s")]}</div>',
                '<div>Fans: {fans}</div>',
                '<div>Release date: {release_date}</div>',
            '</div>'
        ],
        artistTpl: [
            '<div class="image" style="background-image: url({picture})"></div>',
            '<div class="info">',
                '<div>{name}</div>',
                '<div>Albums: {nb_album}</div>',
                '<div>Fans: {nb_fan}</div>',
            '</div>'
        ],
        trackItemTpl: [
            '<div class="track-item">',
                '<div class="info">',
                    '<div class="title">{title}</div>',
                    '<div class="details">{artist.name} - {album.title}</div>',
                '</div>',
                '<div class="duration">{[Ext.Date.format(values.duration, "i:s")]}</div>',
            '</div>'
        ],
        albumItemTpl: [
            '<div class="album-item">',
                '<div class="cover" style="background-image: url({cover});"></div>',
                '<div class="info">',
                    '<div class="title">{title}</div>',
                    '<div class="artist">{artist.name}</div>',
                '</div>',
            '</div>'
        ],
        artistItemTpl: [
            '<div class="artist-item">',
                '<div class="picture" style="background-image: url({picture});"></div>',
                '<div class="info">',
                    '<div class="name">{name}</div>',
                '</div>',
            '</div>'
        ]
    },

    constructor: function(config) {
        this.initConfig(config);
    }

});
