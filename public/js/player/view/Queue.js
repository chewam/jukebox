Ext.define('JB.view.Queue', {

    extend: 'Ext.grid.Panel',

    alias: 'widget.queue',

    cls: 'queue',

    initComponent: function() {

        Ext.apply(this, {
            store: 'Tracks',
            columns: [{
                header: 'Title',
                dataIndex: 'title',
                flex: 1
            }, {
                header: 'Artist',
                // dataIndex: 'artist',
                flex: 1,
                xtype: 'templatecolumn',
                tpl: '<div class="artist" style="background-image: url({artist.picture})">{artist.name}</div>'
                // renderer: this.artistRenderer
            }, {
                header: 'Album',
                // dataIndex: 'album',
                flex: 1,
                xtype: 'templatecolumn',
                tpl: '<div class="album" style="background-image: url({album.cover})">{album.title}</div>'
                // renderer: this.albumRenderer
            }, {
                text: 'Duration',
                dataIndex: 'duration',
                xtype: 'datecolumn',
                format:'i:s'
            // }, {
            //     text: 'xxx',
            //     xtype: 'templatecolumn',
            //     tpl: '{artist.name}'
            }]
        });

        this.callParent();
    }

    // artistRenderer: function(artist) {
    //     console.log('artistRenderer', arguments);
    //     return 'artist';
    // },

    // albumRenderer: function(album) {
    //     console.log('albumRenderer', arguments);
    //     return 'album';
    // }

});