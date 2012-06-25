Ext.define('JB.model.User', {

    extend: 'Ext.data.Model',

    config: {
        identifier: 'uuid',
        fields: [
            'id',
            'login',
            {name: 'picture', defaultValue: 'http://placehold.it/70x70'}
        ]
    }

});
