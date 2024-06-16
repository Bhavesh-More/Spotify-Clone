// const music_Main = document.querySelector("#audio");

let hero = document.querySelector(".songs");

hero.addEventListener("click", (dets)=>{
    if ( dets.target && dets.target.classList.contains("fram")) {
       
        song_array.forEach(function (element, id) {
        
        // console.log(element, id);
        
            if (id == dets.target.id) {
                setMusic(id);
                playMusic();
            }
        })
    }
} )

