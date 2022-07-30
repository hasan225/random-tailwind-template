let toggleBtn = document.querySelector(".toggle")
// let icon = document.querySelector(".icon")

toggleBtn.addEventListener("click",(e)=>{
    let navMenu = document.querySelector(".nav-menu")
    navMenu.classList.toggle('open')
      
    let icon = toggleBtn.childNodes[1]

    if(icon.name === "menu-outline"){
         icon.name = "close-outline"
    }
    else{
        icon.name = "menu-outline"
    }
    
  
})