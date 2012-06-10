function play(tracks) {
    DZ.player.playTracks(tracks, 0, function(response) {
        console.log("track list", response.tracks);
    });
}

function initEvents() {
    var socket = io.connect('http://home.chewam.com:3000');

    socket.on('queue', function (id) {
        console.log(id);
        play([id]);
    });
}

DZ.init({
    appId: '102941',
    channelUrl: 'http://home.chewam.com:3000/channel',
    player: {
        container: 'player',
        cover: true,
        playlist: true,
        width: 729,
        height: 308,
        format: 'vertical',
        onload: function() {
            console.log('init');
            initEvents();
        }
    }
});

DZ.Event.suscribe('player_play', function(evt_name){
    console.log("SHOWCASE => PLAYER IS PLAYING");
});

DZ.Event.suscribe('current_track', function(track, evt_name){
    console.log("current track object", track);
});

DZ.Event.suscribe('player_load', function(){
    console.log("player_load");
});

DZ.Event.suscribe('player_paused', function(){
    console.log("player_paused");
});

DZ.Event.suscribe('player_position', function(){
    console.log("player_position", arguments);
});
