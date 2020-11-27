window.addEventListener("scroll",function(){
    let navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky", window.scrollY > 255);
});