// import Scrollbar from 'smooth-scrollbar';

// Smooth Scroll 
// Scrollbar.init(document.querySelector('#body'));

// GSAP Animations
let tl = gsap.timeline({ defaults: { ease: "power4.easeOut", duration: 2 } });

tl.from('.main__container', { scale: 1.15, duration: 1, opacity: 0 })
    .from('.main__body-header', { y: 100, opacity: 0, duration: 1 }, "-=0.75")
    .from('.main__body-subtitle', { y: 75, opacity: 0, duration: 1 }, "-=0.75")
    .from('#twitter-logo', { y: 50, opacity: 0, duration: 0.5 }, "-=0.7")
    .from('#instagram-logo', { y: 50, opacity: 0, duration: 0.5 }, "-=0.6")
    .from('#github-logo', { y: 50, opacity: 0, duration: 0.5 }, "-=0.5")
    .from('#behance-logo', { y: 50, opacity: 0, duration: 0.5 }, "-=0.4")
    .from('.main__social-line', { height: 0, duration: 1.25 }, "-=1")


// Callback Functions

function toggleNavbarBackground() {
    let navbar = document.querySelector('.main__navbar');
    window.pageYOffset > 900 ? navbar.classList.add('navbar-background') : navbar.classList.remove('navbar-background')
}

// Event Listeners

window.addEventListener('scroll', () => {
    toggleNavbarBackground()
});

// https://stackoverflow.com/questions/39042701/box-shadow-color-based-on-colors-from-image