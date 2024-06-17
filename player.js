let currentmusic = 0;
let flag = true;
let currentarray = 0;
let arr;
const music = document.querySelector("#audio");

// const songname =
const seekbar = document.querySelector(".bar");
const currenttime = document.querySelector(".current-time");
const musicduration = document.querySelector(".total-duration");
const play_pause_holder = document.querySelector(".pause-play");
const playbtn = document.querySelector(".ri-play-circle-fill");
const pausebtn = document.querySelector(".ri-pause-circle-fill");
const forwardbtn = document.querySelector(".ri-skip-forward-fill");
const backwardbtn = document.querySelector(".ri-skip-back-fill");


// song_array.forEach(function(elem, id) {
//      console.log(elem , id);
// })



play_pause_holder.addEventListener("click",function() {
   
   if (flag) {
    playbtn.style.opacity = '0'
    pausebtn.style.opacity = '1'
    music.play();
    flag = false;
   }
   else{
     playbtn.style.opacity = '1'
    pausebtn.style.opacity = '0'
    music.pause();
    flag = true
   }
 
})


const setMusic_playlist = (array, i)=>{
   currentarray = 1;
    arr = [];
   arr = array;
   seekbar.value = 0;
   let po = arr[i];
   currentmusic = i;
   music.src = po;


   currenttime.innerHTML = '00:00'
   setTimeout(() => {
   console.log(music.duration);
   musicduration.innerHTML = formateTime(music.duration)
   seekbar.max = music.duration
}, 300);

}




const setMusic_for_one = (i)=>{
   currentarray = 0;
   seekbar.value = 0;
   currentmusic = 1;
   music.src = i;


   currenttime.innerHTML = '00:00'
   setTimeout(() => {
   musicduration.innerHTML = formateTime(music.duration)
   seekbar.max = music.duration
}, 300);

}

const setMusic = (i)=>{
   currentarray = 0;
   seekbar.value = 0;
   let po = song_array[i];
   currentmusic = i;
   music.src = po.path;


   currenttime.innerHTML = '00:00'
   setTimeout(() => {
   musicduration.innerHTML = formateTime(music.duration)
   seekbar.max = music.duration
}, 300);

}



let formateTime = (time) =>{
   let min = Math.floor(time / 60);
   if(min < 10){
      min = `0${min}`;
   }

   let sec = Math.floor(time % 60);
   if(sec < 10){
      sec =  `0${sec}`;
   }

   return `${min} : ${sec} `;

}


setInterval(() =>{
   seekbar.value = music.currentTime;
  
   currenttime.innerHTML = formateTime(music.currentTime);
   updateSeekbarGradient();
},300)



seekbar.addEventListener("change", ()=>{
   music.currentTime = seekbar.value;
   })


range.addEventListener('input', () => {
     music.currentTime = seekbar.value;
   updateSeekbarGradient();
   });
   

   const updateSeekbarGradient = () => {
      const value = (seekbar.value / seekbar.max) * 100;
      seekbar.style.background = `linear-gradient(to right, rgb(19, 218, 19) 0%, rgb(19, 218, 19) ${value}%, white ${value}%, white 100%)`;
   };

   const playMusic = ()=>{
      flag = true
         playbtn.style.opacity = '0'
         pausebtn.style.opacity = '1'
         flag = false;
        
       
      music.play();

   }


   forwardbtn.addEventListener("click",()=>{
      let array = currentarray === 1 ? arr : song_array;
   
      if (currentmusic >= array.length - 1) {
         currentmusic = 0;
      }
      else{
         currentmusic++;
      }

      if (currentarray == 0) {
         
         setMusic(currentmusic);
         playMusic();
      }
      else{
         setMusic_playlist(arr, currentmusic);
         playMusic();
      }
      


   })

   backwardbtn.addEventListener("click",()=>{
      let array = currentarray === 1 ? arr : song_array;
    
      if (currentmusic <= 0) {
         currentmusic = array.length - 1;
      }
      else{
         currentmusic--;
      }

      if (currentarray == 0) {
         
         setMusic(currentmusic);
         playMusic();
      }
      else{
         setMusic_playlist(arr, currentmusic);
         playMusic();
      }


   })