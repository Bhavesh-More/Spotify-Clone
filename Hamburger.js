
let a = true;
let b = true;
let c = true;

let present1 = 0
let present2 = 0
let present3 = 0

document.querySelector(".Hamburger").addEventListener("click",()=>{
    document.querySelector("#left").style.left = "0"
    // document.querySelector(".login-panel").style.position = "relative"
})

document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector("#left").style.left = "-200%"
    //  document.querySelector(".login-panel").style.position = "sticky"
})

document.querySelector(".headline1").addEventListener("click",(dets)=>{
    if (present3 == 0) {

        if (present2 == 0) {
            
            if (present1 == 0 || present1 == 1) {
                
                
                if (a) {
                    document.querySelector(".searcer-cover").style.display = "none"
                    document.querySelector("#artists-section").style.display = "flex"   
                    document.querySelector("#playlist").style.display = "none"   
                    document.querySelector("#songs-album").style.display = "none" 
                    // document.querySelector(".headline1").style.backgroundColor = "white"
                    document.querySelector(".headline1").style.backgroundPosition = "right bottom"
                    document.querySelector("#ar").style.color = "white"
                    a = false;
                    present1 = 1;
                }
                else{
                    document.querySelector(".searcer-cover").style.display = "none"
                    document.querySelector("#artists-section").style.display = "flex"   
                    document.querySelector("#playlist").style.display = "flex"   
            document.querySelector("#songs-album").style.display = "flex" 
            document.querySelector(".headline1").style.backgroundPosition = " left bottom"
            document.querySelector("#ar").style.color = "black"
            a = true;
            present1 = 0;
        }
    }
  }
}
});
document.querySelector(".headline2").addEventListener("click",(dets)=>{
    if (present1 == 0) {
        
        if (present3 == 0) {
            if (present2 == 0 || present2 == 1) {
       
        if (b) {    
             document.querySelector(".searcer-cover").style.display = "none"
            document.querySelector("#artists-section").style.display = "none"   
         document.querySelector("#playlist").style.display = "flex"   
         document.querySelector("#songs-album").style.display = "none" 
         // document.querySelector(".headline1").style.backgroundColor = "white"
         document.querySelector(".headline2").style.backgroundPosition = "right bottom"
         document.querySelector("#pl").style.color = "white"
         b = false;
         present2 = 1
        }
        else{
            document.querySelector(".searcer-cover").style.display = "none"
            document.querySelector("#artists-section").style.display = "flex"   
            document.querySelector("#playlist").style.display = "flex"   
            document.querySelector("#songs-album").style.display = "flex" 
            document.querySelector(".headline2").style.backgroundPosition = " left bottom"
            document.querySelector("#pl").style.color = "black"
            b = true;
            present2 = 0
        }
    }
    } 
        
    }
    });
document.querySelector(".headline3").addEventListener("click",(dets)=>{
    
    if (present1 == 0) {
      if (present2 == 0) {
        if (present3 == 0 || present3 == 1) {

            if (c) {
                document.querySelector(".searcer-cover").style.display = "none"
                document.querySelector("#artists-section").style.display = "none"   
                document.querySelector("#playlist").style.display = "none"   
                document.querySelector("#songs-album").style.display = "flex" 
                // document.querySelector(".headline1").style.backgroundColor = "white"
                document.querySelector(".headline3").style.backgroundPosition = "right bottom"
                document.querySelector("#so").style.color = "white"
                c = false;
                present3 = 1
            }
            else{
                 document.querySelector(".searcer-cover").style.display = "none"
                document.querySelector("#artists-section").style.display = "flex"   
                document.querySelector("#playlist").style.display = "flex"   
                document.querySelector("#songs-album").style.display = "flex" 
                document.querySelector(".headline3").style.backgroundPosition = " left bottom"
                document.querySelector("#so").style.color = "black"
                c = true;
                present3 = 0
            }
        }
            
        }  
    }
 });

 document.querySelector(".Search").addEventListener("click",(dets)=>{
    document.querySelector("#artists-section").style.display = "none"   
    document.querySelector("#playlist").style.display = "none"  
    document.querySelector(".searcer-cover").style.display = "block"  

 })

 document.querySelector(".po").addEventListener("click",(dets)=>{
    document.querySelector("#artists-section").style.display = "flex"   
    document.querySelector("#playlist").style.display = "flex"  
    document.querySelector(".searcer-cover").style.display = "none"  
    document.querySelector("#songs-search-album").style.display = "none"  
    document.querySelector("#songs-album").style.display = "flex" 
    document.querySelector(".power").remove();
 })

