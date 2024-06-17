
let  Folders_paths = []; // Consider if this is necessary
// let songs_folders_paths = []; // Consider if this is necessary
// let imgs_folders_paths = []; // Consider if this is necessary

function playlists_collector(playlist_name, playlist_img, playlist_maker, song_path , imgs_path) {
    playlist_adder(playlist_name, playlist_img, playlist_maker);
    path_collector( song_path , imgs_path);

}

function path_collector( song_path , imgs_path) {
    Folders_paths.push({ pathofsong: `${ song_path}` ,
                         pathofimg : `${ imgs_path}`  
                       } );
}





playlists_collector("Animal","song img/ainmal.png","Artists","http://127.0.0.1:3000/play/big/","http://127.0.0.1:3000/play/imgss/");
playlists_collector("All time","song img/world of war.png","papa","https://github.com/Bhavesh-More/Spotify-Clone/blob/0a14916cce509d00106944a41e3df0db7aec2b94/Songs/Alone%2C%20Pt.%20II.mp3","https://github.com/Bhavesh-More/Spotify-Clone/blob/0a14916cce509d00106944a41e3df0db7aec2b94/song%20img/Shape%20of%20You.png");
playlists_collector("Boom","playlists/playlist img/Boom.png","Bhavesh","http://127.0.0.1:3000/playlists/Boom/songs/","http://127.0.0.1:3000/playlists/Boom/imgss/");
