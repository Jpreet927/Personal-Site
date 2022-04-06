let hamburgerMenu = document.querySelector(".about-hamburger");
let navbar = document.querySelector(".about-navbar ul");
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle("visible");
    navbar.classList.toggle("visible");
});