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

playlist_player.addEventListener("click", async (event) => {
    if (event.target && event.target.classList.contains("playlist-fram")) {
        library_hero.innerHTML = "";
        library_counter = 0;
        let play_songs = [];
        let ins_img = [];
        let temp_name;
        for (const [id, element] of Folders_paths.entries()) {
            if (id == event.target.id) {
                play_songs = await song_fetcher(element.pathofsong); // Wait for songs to be fetched
                ins_img = await img_fetcher(element.pathofimg);
                temp_name = element.playlist_name;
            }
        }

        for (let index = 0; index < play_songs.length; index++) {
            const element = play_songs[index];
            const elem = ins_img[index];
            let a = elem.replaceAll("%20", " ");
            let b = a.split("/imgss/")[1];
            let c = b.replace(".png", "");
            library_song_shower(`${c}`, `${elem}`, "papa", "bhavesh");
        }

        library_hero.addEventListener("click", (dets) => {
            if (dets.target && dets.target.classList.contains("libray-song-fram")) {
                // Logic to play song in the playlist
                play_songs.forEach(function (element, id) {
                    if (id == dets.target.id) {
                        setMusic_playlist(play_songs, id);
                        playMusic();
                    }
                });
            }
        });
    }
});
