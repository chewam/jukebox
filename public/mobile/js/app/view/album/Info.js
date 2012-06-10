Ext.define('JB.view.album.Info', {

    xtype: 'jb_album_info',

    extend: 'Ext.Container',

    config: {
        cls: 'jb_album_info',
        styleHtmlContent: true,
        tpl: JB.utils.Templates.getAlbumTpl()
    }

});
