
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





playlists_collector("Myplaylist","song img/ainmal.png","Artists","playlist/My playlist/songs/","playlists/My playlist/imgss/");
playlists_collector("All time","song img/world of war.png","papa","playlists/All time/songs/","playlists/All time/imgss/");
playlists_collector("Boom","playlists/playlist img/Boom.png","Bhavesh","playlists/Boom/songs/","playlists/Boom/imgss/");
