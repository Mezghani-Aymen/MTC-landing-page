const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const menuList = document.getElementById('menu-list');

menuList.addEventListener('click', (event) => {
    const targetId = event.target.getAttribute('data-target');
    // if (targetId) {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    // }
    menu.classList.toggle('hidden');
});

menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});
