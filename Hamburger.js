let a = true;
let b = true;

document.querySelector(".Hamburger").addEventListener("click",()=>{
    document.querySelector("#left").style.left = "0"
    // document.querySelector(".login-panel").style.position = "relative"
})

document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector("#left").style.left = "-200%"
    //  document.querySelector(".login-panel").style.position = "sticky"
})

document.querySelector(".headline1").addEventListener("click",(dets)=>{
   
    if (a) {
        document.querySelector(".artists").style.display = "none"   
        document.querySelector(".artists-upward").style.display  = "inline"
        document.querySelector(".artists-downward").style.display  = "none"
        document.querySelector(".headline2").style.backgroundColor = "#1E1E1E"
        a = false;
    }
    else{
        document.querySelector(".artists").style.display = "grid"  
        document.querySelector(".artists-upward").style.display  = "none"
        document.querySelector(".artists-downward").style.display  = "inline"  
        document.querySelector(".headline2").style.backgroundColor = "#121212"  
        a = true;
    }
    //  document.querySelector(".login-panel").style.position = "sticky"
})

document.querySelector(".headline2").addEventListener("click",()=>{
    if (b) {
        document.querySelector(".Songs-playlist").style.display = "none"   
        document.querySelector(".playlist-upward").style.display  = "inline"
        document.querySelector(".playlist-downward").style.display  = "none"
        document.querySelector(".headline2").style.backgroundColor = "#1E1E1E"
        b = false;
    }
    else{
        document.querySelector(".Songs-playlist").style.display = "grid"  
        document.querySelector(".playlist-upward").style.display  = "none"
        document.querySelector(".playlist-downward").style.display  = "inline" 
        document.querySelector(".headline2").style.backgroundColor = "#121212"  
        b = true;
    }
})

