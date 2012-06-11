Ext.define('JB.view.Queue', {

    extend: 'Ext.grid.Panel',

    alias: 'widget.queue',

    cls: 'queue',

    initComponent: function() {

        Ext.apply(this, {
            store: 'Queue',
            columns: [{
                header: 'Title',
                dataIndex: 'title',
                flex: 1
            }, {
                header: 'Artist',
                flex: 1,
                xtype: 'templatecolumn',
                tpl: '<div class="artist" style="background-image: url({artist.picture})">{artist.name}</div>'
            }, {
                header: 'Album',
                flex: 1,
                xtype: 'templatecolumn',
                tpl: '<div class="album" style="background-image: url({album.cover})">{album.title}</div>'
            }, {
                text: 'Duration',
                dataIndex: 'duration',
                xtype: 'datecolumn',
                format:'i:s'
            }, {
                text: 'Emitter',
                dataIndex: 'emitter'
            }]
        });

        this.callParent();
    }

});