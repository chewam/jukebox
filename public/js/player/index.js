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
        'Tracks'
    ],

    controllers: [
        'Main',
        'Player',
        'Queue'
    ]
});
