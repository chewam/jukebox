Ext.define('JB.view.search.TypeList', {

    xtype: 'jb_search_typelist',

    extend: 'Ext.form.Panel',

    config: {
        top: 0,
        left: 0,
        padding: 0,
        width: 220,
        height: 145,
        modal: true,
        hideOnMaskTap: true,
        defaults: {
            name: 'type',
            labelWidth: '70%',
            xtype: 'radiofield'
        },
        items: [{
            // checked: true,
            value: 'track',
            action: 'track',
            label: 'Tracks'
        }, {
            value: 'album',
            action: 'album',
            label: 'Albums'
        }, {
            value: 'artist',
            action: 'artist',
            label: 'Artists'
        }]
    }

});
