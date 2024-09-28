const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const menuList = document.getElementById('menu-list');

menuList.addEventListener('click', (event) => {
    const targetId = event.target.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    menu.classList.toggle('hidden');
});

menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
});