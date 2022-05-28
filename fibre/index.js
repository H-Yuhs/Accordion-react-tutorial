let myNav=document.querySelector(".head-container__navbar")
let myHam=document.querySelector(".navbar__burg")


myHam.addEventListener("click",function(){
    if(myNav.className==="head-container__navbar"){
        myNav.classList.add("responsive")
    }else{
        myNav.classList.remove("responsive")
    }
})

console.log(myNav)