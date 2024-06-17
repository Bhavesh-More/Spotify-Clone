const range = document.querySelector(".bar");
var song_array = [];
let counter = 0;
let library_counter = 0;
let playlist_counter = 0;


function getvalue() {
  let inputText = document.getElementById("input").value.toLowerCase();
 
  clearSearchResults();
  if (inputText.length > 0) {
      let matchedSongs = [];

      // Hide the main songs album and show the search results album
      document.querySelector("#songs-album").style.display = "none";
      document.querySelector("#songs-search-album").style.display = "flex";

      song_array.forEach(function (song) {
          let songName = song.name.toLowerCase();
          if (songName.startsWith(inputText)) {
              matchedSongs.push(song);
          }
      });

      matchedSongs.forEach((song) => {
        
       
          Song_search_adder(song.name, song.img, song.path, song.artists);
          document.querySelector(".power").addEventListener("click", (event) => {
              if (event.target && event.target.classList.contains("fram")) {
                  setMusic_for_one(song.path);
                  playMusic();
              }
          });
      });
  }
  else{
    clearSearchResults();
    document.querySelector("#songs-album").style.display = "flex";
    document.querySelector("#songs-search-album").style.display = "none";
  }
}

function clearSearchResults() {
  document.getElementById("songs-search-album").innerHTML = "";
}




function playlist_adder(playlist_name, playlist_img, playlist_maker) {
  let main = document.querySelector(".Songs-playlist");

  let cardcover = document.createElement("div");
  cardcover.className = "center";
  main.appendChild(cardcover);

  let newcard = document.createElement("div");
  newcard.className = "fram playlist-fram";
  newcard.id = `${playlist_counter}`;
  playlist_counter++;

  let img = document.createElement("img");
  img.className = "play";
  img.src = "play-button.png";
  newcard.appendChild(img);

  let img_fram = document.createElement("div");
  img_fram.className = "img-fram";
  newcard.appendChild(img_fram);

  let papa = document.createElement("img");
  papa.className = "playlist-img";
  papa.src = `${playlist_img}`;
  img_fram.appendChild(papa);

  let name = document.createElement("div");
  name.className = "playlist-name white bolder";
  name.innerHTML = `${playlist_name}`;
  newcard.appendChild(name);

  let artists_names = document.createElement("div");
  artists_names.className = "playlist-creator white";
  artists_names.innerHTML = `${playlist_maker}`;
  newcard.appendChild(artists_names);

  cardcover.appendChild(newcard);
}

function library_song_shower(playlist_name, img_song, Song, playlist_crator) {
  let main = document.querySelector(".inner");

  let newcard = document.createElement("div");
  newcard.className = "libray-song-fram";
  newcard.id = `${library_counter}`;
  library_counter++;

  let audio = document.createElement("audio");
  audio.className = "audio";
  audio.src = `${Song}`;
  newcard.appendChild(audio);

  let papa = document.createElement("img");
  papa.className = "library-img";
  papa.src = `${img_song}`;
  newcard.appendChild(papa);

  let cover_playlists = document.createElement("div");
  cover_playlists.className = "cover-playlistname-artists";
  newcard.appendChild(cover_playlists);

  let name = document.createElement("div");
  name.className = " library-song-name  song-name white bolder";
  name.innerHTML = `${playlist_name}`;
  cover_playlists.appendChild(name);

  let artists_names = document.createElement("div");
  artists_names.className = "song-artists white";
  artists_names.innerHTML = `${playlist_crator}`;
  cover_playlists.appendChild(artists_names);

  main.appendChild(newcard);
}

function Song_adder(song_name, song_img, Song, song_artists) {
  song_array.push({ path: Song, ids: counter , name: song_name , img: song_img , artists: song_artists });
  let main = document.querySelector(".songs");

  // let audio = document.querySelector(".audio");

  let cardcover = document.createElement("div");
  cardcover.className = "center";
  main.appendChild(cardcover);

  let newcard = document.createElement("div");
  newcard.className = "fram margin";
  newcard.id = `${counter}`;
  counter++;

  let img = document.createElement("img");
  img.className = "play";
  img.src = "play-button.png";
  newcard.appendChild(img);

  let audio = document.createElement("audio");
  audio.className = "audio";
  audio.src = `${Song}`;
  newcard.appendChild(audio);

  let img_fram = document.createElement("div");
  img_fram.className = "img-fram";
  newcard.appendChild(img_fram);

  let papa = document.createElement("img");
  papa.className = "song-img";
  papa.src = `${song_img}`;
  img_fram.appendChild(papa);

  let name = document.createElement("div");
  name.className = "song-name white bolder";
  name.innerHTML = `${song_name}`;
  newcard.appendChild(name);

  let artists_names = document.createElement("div");
  artists_names.className = "song-artists white";
  artists_names.innerHTML = `${song_artists}`;
  newcard.appendChild(artists_names);

  cardcover.appendChild(newcard);
}

function Song_search_adder(song_name, song_img, Song, song_artists) {
  // song_array.push({ path: Song, ids: counter , name: song_name });

  let main = document.querySelector("#songs-search-album"); 

  let main_cover = document.createElement("div");
  main_cover.className = ".songs power";
  main.appendChild(main_cover);

  // let audio = document.querySelector(".audio");

  let cardcover = document.createElement("div");
  cardcover.className = "center";
  main_cover.appendChild(cardcover);

  let newcard = document.createElement("div");
  newcard.className = "fram margin";
  newcard.id = `${counter}`;
  counter++;

  let img = document.createElement("img");
  img.className = "play";
  img.src = "play-button.png";
  newcard.appendChild(img);

  let audio = document.createElement("audio");
  audio.className = "audio";
  audio.src = `${Song}`;
  newcard.appendChild(audio);

  let img_fram = document.createElement("div");
  img_fram.className = "img-fram";
  newcard.appendChild(img_fram);

  let papa = document.createElement("img");
  papa.className = "song-img";
  papa.src = `${song_img}`;
  img_fram.appendChild(papa);

  let name = document.createElement("div");
  name.className = "song-name white bolder";
  name.innerHTML = `${song_name}`;
  newcard.appendChild(name);

  let artists_names = document.createElement("div");
  artists_names.className = "song-artists white";
  artists_names.innerHTML = `${song_artists}`;
  newcard.appendChild(artists_names);

  cardcover.appendChild(newcard);
}

function artists_adder(artists_img, artists_name) {
  let main = document.querySelector(".artists");

  let cardcover = document.createElement("div");
  cardcover.className = "center";
  main.appendChild(cardcover);

  let newcard = document.createElement("div");
  newcard.className = "fram artists-fram";

  let img = document.createElement("img");
  img.className = "play";
  img.src = "play-button.png";
  newcard.appendChild(img);

  let img_fram = document.createElement("div");
  img_fram.className = "img-fram";
  newcard.appendChild(img_fram);

  let papa = document.createElement("img");
  papa.className = "artists-img";
  papa.src = `${artists_img}`;
  img_fram.appendChild(papa);

  let name = document.createElement("div");
  name.className = "artists-name white";
  name.innerHTML = `${artists_name}`;
  newcard.appendChild(name);

  let work = document.createElement("div");
  work.className = "artists-profasion white";
  work.innerHTML = `Artists`;
  newcard.appendChild(work);

  cardcover.appendChild(newcard);
}

artists_adder("Artists img/Arijit singh.png", "Arijit Singh");
artists_adder("Artists img/Alan walker.png", "Alan walker");
artists_adder("Artists img/Ritviz.png", "Ritviz");
artists_adder("Artists img/Carry.png", "Ajey Nagar(CarrayMinati)");

Song_adder("Animal", "song img/ainmal.png", "Songs/Arjan Vailly.mp3", "Manan Bharadwaj, Vishal Mishra, Jaani");
Song_adder(
  "Shape of You",
  "song img/Shape of You.png",
  "Songs/Shape of You.mp3",
  "Manan Bhardwaj, Vishal, Jaani"
);
Song_adder(
  "Stay",
  "song img/stay.png",
  "Songs/STAY (with Justin Bieber).mp3",
  "The Kid LAROI, Justin Bieber, 2021"
);
Song_adder("pasoori", "song img/pasoori.png", "Songs/Pasoori.mp3", "Shae Gill, Ali Sethi, 2022-1");
Song_adder(
  "Show me the thumka",
  "song img/Show me the thumka.png",
  "Songs/Show Me The Thumka (From _Tu Jhoothi Main Makkaar_).mp3",
  "Pritam, Amitabh Bhattacharya, Sunidhi Chauhan, 2023"
);
Song_adder(
  "chogada",
  "song img/chogada.png",
  "Songs/Chogada (From _Loveyatri_).mp3",
  "Darshan Raval, Asees Kaur, Lijo George-Dj Chetas, 2018"
);
Song_adder(
  "Sooraj Dooba Hain",
  "song img/groove.png",
  "Songs/Sooraj Dooba Hain (From _Roy_).mp3",
  "Arijit Singh, Aditi Singh Sharma"
);
Song_adder("Jugnu", "song img/Jugnu.png", "Songs/Jugnu.mp3", "Badshah, 2021");
Song_adder(
  "pyaar hota kati baar hai",
  "song img/pyaar hota kati baar hai.png",
  "Songs/Pyaar Hota Kayi Baar Hai (From _Tu Jhoothi Main Makkaar_).mp3",
  "Pritam, Arijit Singh, Amitabh Bhattacharya, 2023"
);
Song_adder(
  "Alone, Pt. II",
  "song img/world of war.png",
  "Songs/Alone, Pt. II.mp3",
  "Alan Walker, 2021"
);
Song_adder(
  "Faded",
  "song img/Faded.png",
  "Songs/Faded.mp3",
  "Alan Walker"
);
Song_adder(
  "Chalo Chalein",
  "song img/Chalo Chalein.png",
  "Songs/Chalo Chalein.mp3",
  "Ritviz, Seedhe Maul"
);
Song_adder(
  "Tang Tana Tang",
  "song img/Tang Tang Tang.png",
  "Songs/Tang Tana Tang.mp3",
  "Sneha Khanwalkar, Saurabh Lokhande,Jarvis Menezes"
);
Song_adder(
  "Raataan Lambiyan",
  "song img/Raataan Lambiyan.png",
  "Songs/Raataan Lambiyan.mp3",
  "Tanishk Bagchi, Jubin Nautiyal, Asees Kaur, 2021"
);
Song_adder(
  "Matargashti",
  "song img/Matargashti.png",
  "Songs/Matargashti.mp3",
  "A.R. Rahman, Irshad Kamil, 2015"
);
Song_adder(
  "Thunder",
  "song img/Thunder.png",
  "Songs/Thunder.mp3",
  "Imagine Dragons"
);
Song_adder(
  "Sunflower",
  "song img/Sunflower.png",
  "Songs/Sunflower.mp3",
  "Post Malone, Swae Lee"
);
Song_adder(
  "Panini",
  "song img/Panini.png",
  "Songs/Panini.mp3",
  "Lil Nars X"
);


// timepass.push({ path: element.href ,
//     ids : counter
//   } )
