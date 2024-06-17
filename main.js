let Folders_paths = [];

function playlists_collector(playlist_name, playlist_img, playlist_maker, song_path, imgs_path) {
    playlist_adder(playlist_name, playlist_img, playlist_maker);
    path_collector(song_path, imgs_path);
}

function path_collector(song_path, imgs_path) {
    Folders_paths.push({
        pathofsong: `${song_path}`,
        pathofimg: `${imgs_path}`
    });
}

// Use raw.githubusercontent.com for GitHub URLs
playlists_collector(
    "Animal",
    "song img/animal.png",
    "Artists",
    "https://raw.githubusercontent.com/Bhavesh-More/Spotify-Clone/main/play/big/",
    "https://raw.githubusercontent.com/Bhavesh-More/Spotify-Clone/main/play/imgss/"
);
playlists_collector(
    "All time",
    "song img/world of war.png",
    "papa",
    "https://raw.githubusercontent.com/Bhavesh-More/Spotify-Clone/main/playlists/All%20time/songs/",
    "https://raw.githubusercontent.com/Bhavesh-More/Spotify-Clone/main/playlists/All%20time/imgss/"
);
playlists_collector(
    "Boom",
    "playlists/playlist img/Boom.png",
    "Bhavesh",
    "https://raw.githubusercontent.com/Bhavesh-More/Spotify-Clone/main/playlists/Boom/songs/",
    "https://raw.githubusercontent.com/Bhavesh-More/Spotify-Clone/main/playlists/Boom/imgss/"
);
