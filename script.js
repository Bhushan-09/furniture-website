const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-link");
const menuBtnIcon = menuBtn.querySelector("i");


menuBtn.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open");
    
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class" , isOpen ? "bx bx-x" : "bx bx-menu-alt-right");
}); 



navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open");
 
    menuBtnIcon.setAttribute("class","bx bx-menu-alt-right");
});

const navSearch = document.getElementById("nav-search-1");
navSearch.addEventListener("click",(e)=>{
    navSearch.classList.toggle("open");
});



const scrollRevealOption ={
    distance:"50px",
    origin:"bottom",
    duration:"1000",
};

ScrollReveal().reveal(".header-image img",{
    ...scrollRevealOption,
    origin:"right",
});
ScrollReveal().reveal(".header-content div",{
    duration:1000,
    delay:500,
});
ScrollReveal().reveal(".header-content h1",{
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".header-content p",{
    ...scrollRevealOption,
    delay:1500,
});



ScrollReveal().reveal(".deals-card",{
    ...scrollRevealOption,
    interval:500,
});



ScrollReveal().reveal(".about-image img",{
    ...scrollRevealOption,
    origin:"right",
});
ScrollReveal().reveal(".about-card",{
    duration:1000,
    interval:500,
    delay:500,
});



const swiper = new Swiper(".swiper",{
    loop:true,
});