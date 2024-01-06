var a = document.querySelector("#imgcontainer")
var fixed = document.querySelector("#fixed")
a.addEventListener("mouseleave",function(){
    fixed.style.display="none"
})
a.addEventListener("mouseenter",function(){
   fixed.style.display="block"
})


var dabbas = document.querySelectorAll("#dabba")
dabbas.forEach(function(e){
e.addEventListener("mouseenter",function(){
    var photo= e.getAttribute("data-image")
    fixed.style.backgroundImage= `url(${photo})`
})
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "3",
    centeredSlides: false,
    spaceBetween:50,
   
      
    
  });

  var loader=document.querySelector("#loader")
  setTimeout(function(){
      loader.style.top="-100%"
    },4400 )


    var fullscr= document.querySelector("#fullsc")
    var navimg=document.querySelector("nav img")
    var menu = document.querySelector("#nav2 h2")
    var flag=0
    menu.addEventListener("click",function(){
        if(flag==0) { 
        fullscr.style.top=0
        navimg.style.opacity=0
        flag=1
    }else{
        fullscr.style.top="-100%"
        navimg.style.opacity=1
        flag=0
    }
       
    })
  
    