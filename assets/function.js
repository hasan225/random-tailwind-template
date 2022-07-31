let toggleBtn = document.querySelector(".toggle")
let overlay = document.querySelector(".overlay")



let open = document.querySelector('.open');
let close = document.querySelector('.close');

 
let overlayWithToggle = [overlay, toggleBtn]

 overlayWithToggle.forEach((each)=>{

    each.addEventListener("click",(e)=>{
    let navMenu = document.querySelector(".nav-menu")
    
let menuWithLayer = [ navMenu, overlay ]

menuWithLayer.forEach((each)=>{
    each.classList.toggle("open")
})
      
    let icon = toggleBtn.childNodes[1]

    if(icon.name === "menu-outline"){
         icon.name = "close-outline"
    }
    else{
        icon.name = "menu-outline"
    }
    
  
})
 })

