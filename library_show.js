let library_hero = document.querySelector(".inner");
let playlist_player = document.querySelector(".Songs-playlist");

async function panda(path) {
    let response = await fetch(path, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
    return response;
}

async function song_fetcher(path) {
    let response = await panda(path);
    let html = await response.text();

    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    let anchors = tempDiv.getElementsByTagName("a");
    let gaana = [];

    for (let i = 0; i < anchors.length; i++) {
        let href = anchors[i].href;
        if (href.endsWith(".mp3")) {
            gaana.push(href);
        }
    }

    return gaana;
}

async function img_fetcher(path) {
    let response_img = await panda(path);
    let html_img = await response_img.text();

    let tempDiv_img = document.createElement("div");
    tempDiv_img.innerHTML = html_img;

    let anchors_img = tempDiv_img.getElementsByTagName("a");
    let imges = [];

    for (let i = 0; i < anchors_img.length; i++) {
        let href = anchors_img[i].href;
        if (href.endsWith(".png")) {
            imges.push(href);
        }
    }

    return imges;
}

async function fetchPlaylistData() {
    const response = await fetch('https://raw.githubusercontent.com/Bhavesh-More/Spotify-Clone/main/playlist.json');
    const data = await response.json();
    return data;
}

playlist_player.addEventListener("click", async (event) => {
    if (event.target && event.target.classList.contains("playlist-fram")) {
        library_hero.innerHTML = "";
        library_counter = 0;
        const playlists = await fetchPlaylistData();
        const playlistName = event.target.id;
        const playlist = playlists[playlistName];

        for (let i = 0; i < playlist.songs.length; i++) {
            const song = playlist.songs[i];
            const img = playlist.images[i];
            const songName = img.split('/').pop().replace('.png', '');
            library_song_shower(songName, img, "papa", "bhavesh");
        }

        library_hero.addEventListener("click", (dets) => {
            if (dets.target && dets.target.classList.contains("libray-song-fram")) {
                // Logic to play song in the playlist
                playlist.songs.forEach((element, id) => {
                    if (id == dets.target.id) {
                        setMusic_playlist(playlist.songs, id);
                        playMusic();
                    }
                });
            }
        });
    }
});
