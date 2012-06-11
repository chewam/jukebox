Ext.define('JB.view.History', {

    extend: 'Ext.grid.Panel',

    alias: 'widget.history',

    cls: 'history',

    initComponent: function() {

        Ext.apply(this, {
            store: 'History',
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
            }, {
                text: 'Last play',
                dataIndex: 'lastplay',
                xtype: 'datecolumn',
                format:'H:i d/m/Y'
            }]
        });

        this.callParent();
    }

});
