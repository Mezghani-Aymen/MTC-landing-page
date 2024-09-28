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
        nav: false,
        autoplay: false,
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

const scrollToTopButton = document.getElementById("scrollToTop");

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "flex";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});