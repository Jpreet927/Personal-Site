// https://stackoverflow.com/questions/39042701/box-shadow-color-based-on-colors-from-image

function toggleNavbarBackground() {
    let navbar = document.querySelector('.main__navbar');
    window.pageYOffset > 900 ? navbar.classList.add('navbar-background') : navbar.classList.remove('navbar-background')
}

window.addEventListener('scroll', () => {
    toggleNavbarBackground()
});