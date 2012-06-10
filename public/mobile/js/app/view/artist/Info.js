Ext.define('JB.view.artist.Info', {

    xtype: 'jb_artist_info',

    extend: 'Ext.Container',

    config: {
        cls: 'jb_artist_info',
        styleHtmlContent: true,
        tpl: JB.utils.Templates.getArtistTpl()
    }

});
