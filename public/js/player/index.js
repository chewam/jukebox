Ext.Loader.setConfig({
    enabled: true
    // paths: {
    //     app : '/player'
    // }
});

Ext.application({

    name: 'JB',

    appFolder: '/js/player',

    autoCreateViewport: true,

    models: [
        'Track'
    ],

    stores: [
        'Queue',
        'History'
    ],

    controllers: [
        'Main',
        'Player',
        'Queue',
        'History'
    ]
});
