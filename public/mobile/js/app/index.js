// Ext.Loader.setConfig({
//     enabled: true,
//     paths: {
//         'Ext.plugin': 'js/app/plugin'
//     }
// });

Ext.application({

    name: 'JB',

    appFolder: 'js/app',

    viewport: {
        autoMaximize : true,
        layout: {
            type: 'card',
            animation: {
                type: 'flip',
                direction: 'left'
            }
        }
    },

    requires: [
        'JB.utils.Config',
        'JB.utils.Templates'
    ],

    controllers: ['Main', 'Login', 'Map', 'Search', 'Track', 'Album', 'Artist']

});
