window.addEventListener("scroll",function(){
    let navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky", window.scrollY > 255);
});

AOS.init({
    offset: 300,
    duration: 1000
});
